package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateSoftwareTokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretCode")
    public String secretCode;
    public AssociateSoftwareTokenResponse withSecretCode(String secretCode) {
        this.secretCode = secretCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Session")
    public String session;
    public AssociateSoftwareTokenResponse withSession(String session) {
        this.session = session;
        return this;
    }
}