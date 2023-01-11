package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetIdentityPoolConfigurationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CognitoStreams")
    public SetIdentityPoolConfigurationRequestBodyCognitoStreams cognitoStreams;
    public SetIdentityPoolConfigurationRequestBody withCognitoStreams(SetIdentityPoolConfigurationRequestBodyCognitoStreams cognitoStreams) {
        this.cognitoStreams = cognitoStreams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PushSync")
    public SetIdentityPoolConfigurationRequestBodyPushSync pushSync;
    public SetIdentityPoolConfigurationRequestBody withPushSync(SetIdentityPoolConfigurationRequestBodyPushSync pushSync) {
        this.pushSync = pushSync;
        return this;
    }
}