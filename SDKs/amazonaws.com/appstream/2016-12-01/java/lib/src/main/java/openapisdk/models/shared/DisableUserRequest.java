package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisableUserRequest {
    @JsonProperty("AuthenticationType")
    public AuthenticationTypeEnum authenticationType;
    public DisableUserRequest withAuthenticationType(AuthenticationTypeEnum authenticationType) {
        this.authenticationType = authenticationType;
        return this;
    }
    @JsonProperty("UserName")
    public String userName;
    public DisableUserRequest withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}