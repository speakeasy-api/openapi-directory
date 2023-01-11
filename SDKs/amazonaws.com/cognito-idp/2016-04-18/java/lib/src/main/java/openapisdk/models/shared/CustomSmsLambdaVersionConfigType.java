package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CustomSmsLambdaVersionConfigType
 * A custom SMS sender Lambda configuration type.
**/
public class CustomSmsLambdaVersionConfigType {
    @JsonProperty("LambdaArn")
    public String lambdaArn;
    public CustomSmsLambdaVersionConfigType withLambdaArn(String lambdaArn) {
        this.lambdaArn = lambdaArn;
        return this;
    }
    @JsonProperty("LambdaVersion")
    public CustomSmsSenderLambdaVersionTypeEnum lambdaVersion;
    public CustomSmsLambdaVersionConfigType withLambdaVersion(CustomSmsSenderLambdaVersionTypeEnum lambdaVersion) {
        this.lambdaVersion = lambdaVersion;
        return this;
    }
}