package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VerifySoftwareTokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessToken")
    public String accessToken;
    public VerifySoftwareTokenRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FriendlyDeviceName")
    public String friendlyDeviceName;
    public VerifySoftwareTokenRequest withFriendlyDeviceName(String friendlyDeviceName) {
        this.friendlyDeviceName = friendlyDeviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Session")
    public String session;
    public VerifySoftwareTokenRequest withSession(String session) {
        this.session = session;
        return this;
    }
    @JsonProperty("UserCode")
    public String userCode;
    public VerifySoftwareTokenRequest withUserCode(String userCode) {
        this.userCode = userCode;
        return this;
    }
}