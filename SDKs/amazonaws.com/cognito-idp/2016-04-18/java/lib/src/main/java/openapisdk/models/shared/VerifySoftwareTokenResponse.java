package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VerifySoftwareTokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Session")
    public String session;
    public VerifySoftwareTokenResponse withSession(String session) {
        this.session = session;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public VerifySoftwareTokenResponseTypeEnum status;
    public VerifySoftwareTokenResponse withStatus(VerifySoftwareTokenResponseTypeEnum status) {
        this.status = status;
        return this;
    }
}