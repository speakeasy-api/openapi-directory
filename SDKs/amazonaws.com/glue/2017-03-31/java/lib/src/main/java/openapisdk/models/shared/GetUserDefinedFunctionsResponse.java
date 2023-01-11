package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserDefinedFunctionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetUserDefinedFunctionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserDefinedFunctions")
    public UserDefinedFunction[] userDefinedFunctions;
    public GetUserDefinedFunctionsResponse withUserDefinedFunctions(UserDefinedFunction[] userDefinedFunctions) {
        this.userDefinedFunctions = userDefinedFunctions;
        return this;
    }
}