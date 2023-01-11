package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CustomEmailLambdaVersionConfigType
 * A custom email sender Lambda configuration type.
**/
public class CustomEmailLambdaVersionConfigType {
    @JsonProperty("LambdaArn")
    public String lambdaArn;
    public CustomEmailLambdaVersionConfigType withLambdaArn(String lambdaArn) {
        this.lambdaArn = lambdaArn;
        return this;
    }
    @JsonProperty("LambdaVersion")
    public CustomEmailSenderLambdaVersionTypeEnum lambdaVersion;
    public CustomEmailLambdaVersionConfigType withLambdaVersion(CustomEmailSenderLambdaVersionTypeEnum lambdaVersion) {
        this.lambdaVersion = lambdaVersion;
        return this;
    }
}