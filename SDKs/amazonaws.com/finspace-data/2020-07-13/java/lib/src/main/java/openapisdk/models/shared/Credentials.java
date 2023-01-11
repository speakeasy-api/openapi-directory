package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Credentials
 * Set short term API credentials.
**/
public class Credentials {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessKeyId")
    public String accessKeyId;
    public Credentials withAccessKeyId(String accessKeyId) {
        this.accessKeyId = accessKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secretAccessKey")
    public String secretAccessKey;
    public Credentials withSecretAccessKey(String secretAccessKey) {
        this.secretAccessKey = secretAccessKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionToken")
    public String sessionToken;
    public Credentials withSessionToken(String sessionToken) {
        this.sessionToken = sessionToken;
        return this;
    }
}