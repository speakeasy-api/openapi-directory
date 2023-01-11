package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AwsSessionCredentials
 * Represents an AWS session credentials object. These credentials are temporary credentials that are issued by AWS Secure Token Service (STS). They can be used to access input and output artifacts in the S3 bucket used to store artifact for the pipeline in AWS CodePipeline.
**/
public class AwsSessionCredentials {
    @JsonProperty("accessKeyId")
    public String accessKeyId;
    public AwsSessionCredentials withAccessKeyId(String accessKeyId) {
        this.accessKeyId = accessKeyId;
        return this;
    }
    @JsonProperty("secretAccessKey")
    public String secretAccessKey;
    public AwsSessionCredentials withSecretAccessKey(String secretAccessKey) {
        this.secretAccessKey = secretAccessKey;
        return this;
    }
    @JsonProperty("sessionToken")
    public String sessionToken;
    public AwsSessionCredentials withSessionToken(String sessionToken) {
        this.sessionToken = sessionToken;
        return this;
    }
}