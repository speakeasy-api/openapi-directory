package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetTestResult
 * Represents the result of a get test request.
**/
public class GetTestResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("test")
    public Test test;
    public GetTestResult withTest(Test test) {
        this.test = test;
        return this;
    }
}