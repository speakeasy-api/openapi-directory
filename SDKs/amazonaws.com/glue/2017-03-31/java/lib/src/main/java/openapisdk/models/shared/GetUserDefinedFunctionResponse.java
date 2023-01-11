package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserDefinedFunctionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserDefinedFunction")
    public UserDefinedFunction userDefinedFunction;
    public GetUserDefinedFunctionResponse withUserDefinedFunction(UserDefinedFunction userDefinedFunction) {
        this.userDefinedFunction = userDefinedFunction;
        return this;
    }
}