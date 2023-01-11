package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTestGridSessionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testGridSession")
    public TestGridSession testGridSession;
    public GetTestGridSessionResult withTestGridSession(TestGridSession testGridSession) {
        this.testGridSession = testGridSession;
        return this;
    }
}