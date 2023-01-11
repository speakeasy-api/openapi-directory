package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetFunctionResponse
 * This response contains the object for AWS Lambda function location (see <a>API_FunctionCodeLocation</a>
**/
public class GetFunctionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public FunctionCodeLocation code;
    public GetFunctionResponse withCode(FunctionCodeLocation code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Configuration")
    public FunctionConfiguration configuration;
    public GetFunctionResponse withConfiguration(FunctionConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
}