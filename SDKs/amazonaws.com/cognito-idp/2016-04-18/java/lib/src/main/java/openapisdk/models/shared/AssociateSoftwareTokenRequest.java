package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateSoftwareTokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessToken")
    public String accessToken;
    public AssociateSoftwareTokenRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Session")
    public String session;
    public AssociateSoftwareTokenRequest withSession(String session) {
        this.session = session;
        return this;
    }
}