package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CognitoStreams
 * Configuration options for configure Cognito streams.
**/
public class CognitoStreams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleArn")
    public String roleArn;
    public CognitoStreams withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamName")
    public String streamName;
    public CognitoStreams withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamingStatus")
    public StreamingStatusEnum streamingStatus;
    public CognitoStreams withStreamingStatus(StreamingStatusEnum streamingStatus) {
        this.streamingStatus = streamingStatus;
        return this;
    }
}