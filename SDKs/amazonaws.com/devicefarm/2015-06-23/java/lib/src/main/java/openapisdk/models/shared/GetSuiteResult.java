package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetSuiteResult
 * Represents the result of a get suite request.
**/
public class GetSuiteResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suite")
    public Suite suite;
    public GetSuiteResult withSuite(Suite suite) {
        this.suite = suite;
        return this;
    }
}