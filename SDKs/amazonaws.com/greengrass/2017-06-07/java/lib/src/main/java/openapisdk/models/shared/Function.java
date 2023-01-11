package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Function
 * Information about a Lambda function.
**/
public class Function {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FunctionArn")
    public String functionArn;
    public Function withFunctionArn(String functionArn) {
        this.functionArn = functionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FunctionConfiguration")
    public FunctionConfiguration functionConfiguration;
    public Function withFunctionConfiguration(FunctionConfiguration functionConfiguration) {
        this.functionConfiguration = functionConfiguration;
        return this;
    }
    @JsonProperty("Id")
    public String id;
    public Function withId(String id) {
        this.id = id;
        return this;
    }
}