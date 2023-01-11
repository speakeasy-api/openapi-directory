package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsCredentials
 * Temporary access credentials used for uploading game build files to Amazon GameLift. They are valid for a limited time. If they expire before you upload your game build, get a new set by calling <a>RequestUploadCredentials</a>.
**/
public class AwsCredentials {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessKeyId")
    public String accessKeyId;
    public AwsCredentials withAccessKeyId(String accessKeyId) {
        this.accessKeyId = accessKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretAccessKey")
    public String secretAccessKey;
    public AwsCredentials withSecretAccessKey(String secretAccessKey) {
        this.secretAccessKey = secretAccessKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SessionToken")
    public String sessionToken;
    public AwsCredentials withSessionToken(String sessionToken) {
        this.sessionToken = sessionToken;
        return this;
    }
}