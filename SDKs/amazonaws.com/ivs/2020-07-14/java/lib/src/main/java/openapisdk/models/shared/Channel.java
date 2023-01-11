package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Channel
 * Object specifying a channel.
**/
public class Channel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public Channel withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorized")
    public Boolean authorized;
    public Channel withAuthorized(Boolean authorized) {
        this.authorized = authorized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingestEndpoint")
    public String ingestEndpoint;
    public Channel withIngestEndpoint(String ingestEndpoint) {
        this.ingestEndpoint = ingestEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latencyMode")
    public ChannelLatencyModeEnum latencyMode;
    public Channel withLatencyMode(ChannelLatencyModeEnum latencyMode) {
        this.latencyMode = latencyMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Channel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playbackUrl")
    public String playbackUrl;
    public Channel withPlaybackUrl(String playbackUrl) {
        this.playbackUrl = playbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordingConfigurationArn")
    public String recordingConfigurationArn;
    public Channel withRecordingConfigurationArn(String recordingConfigurationArn) {
        this.recordingConfigurationArn = recordingConfigurationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public Channel withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ChannelTypeEnum type;
    public Channel withType(ChannelTypeEnum type) {
        this.type = type;
        return this;
    }
}