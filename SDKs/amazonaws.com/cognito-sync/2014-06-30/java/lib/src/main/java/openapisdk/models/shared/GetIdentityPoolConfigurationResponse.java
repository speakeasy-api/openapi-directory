package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetIdentityPoolConfigurationResponse
 * The output for the GetIdentityPoolConfiguration operation.
**/
public class GetIdentityPoolConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CognitoStreams")
    public CognitoStreams cognitoStreams;
    public GetIdentityPoolConfigurationResponse withCognitoStreams(CognitoStreams cognitoStreams) {
        this.cognitoStreams = cognitoStreams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityPoolId")
    public String identityPoolId;
    public GetIdentityPoolConfigurationResponse withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PushSync")
    public PushSync pushSync;
    public GetIdentityPoolConfigurationResponse withPushSync(PushSync pushSync) {
        this.pushSync = pushSync;
        return this;
    }
}