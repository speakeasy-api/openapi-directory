package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFunctionsResponse
 * Contains a list of AWS Lambda function configurations (see <a>API_FunctionConfiguration</a>.
**/
public class ListFunctionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Functions")
    public FunctionConfiguration[] functions;
    public ListFunctionsResponse withFunctions(FunctionConfiguration[] functions) {
        this.functions = functions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListFunctionsResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}