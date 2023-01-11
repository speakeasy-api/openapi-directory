package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetIdentityPoolConfigurationResponse
 * The output for the SetIdentityPoolConfiguration operation
**/
public class SetIdentityPoolConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CognitoStreams")
    public CognitoStreams cognitoStreams;
    public SetIdentityPoolConfigurationResponse withCognitoStreams(CognitoStreams cognitoStreams) {
        this.cognitoStreams = cognitoStreams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityPoolId")
    public String identityPoolId;
    public SetIdentityPoolConfigurationResponse withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PushSync")
    public PushSync pushSync;
    public SetIdentityPoolConfigurationResponse withPushSync(PushSync pushSync) {
        this.pushSync = pushSync;
        return this;
    }
}