package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetIdentityPoolConfigurationRequestBodyCognitoStreams
 * Configuration options for configure Cognito streams.
**/
public class SetIdentityPoolConfigurationRequestBodyCognitoStreams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleArn")
    public String roleArn;
    public SetIdentityPoolConfigurationRequestBodyCognitoStreams withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamName")
    public String streamName;
    public SetIdentityPoolConfigurationRequestBodyCognitoStreams withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamingStatus")
    public openapisdk.models.shared.StreamingStatusEnum streamingStatus;
    public SetIdentityPoolConfigurationRequestBodyCognitoStreams withStreamingStatus(openapisdk.models.shared.StreamingStatusEnum streamingStatus) {
        this.streamingStatus = streamingStatus;
        return this;
    }
}