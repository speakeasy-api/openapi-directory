package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TestEventPatternResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Result")
    public Boolean result;
    public TestEventPatternResponse withResult(Boolean result) {
        this.result = result;
        return this;
    }
}