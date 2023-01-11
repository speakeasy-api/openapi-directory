package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsLambdaFunctionLayer
 * An Lambda layer.
**/
public class AwsLambdaFunctionLayer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public AwsLambdaFunctionLayer withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeSize")
    public Long codeSize;
    public AwsLambdaFunctionLayer withCodeSize(Long codeSize) {
        this.codeSize = codeSize;
        return this;
    }
}