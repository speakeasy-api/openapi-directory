package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDashStreamingSessionUrlRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DASHFragmentSelector")
    public GetDashStreamingSessionUrlRequestBodyDashFragmentSelector dashFragmentSelector;
    public GetDashStreamingSessionUrlRequestBody withDashFragmentSelector(GetDashStreamingSessionUrlRequestBodyDashFragmentSelector dashFragmentSelector) {
        this.dashFragmentSelector = dashFragmentSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayFragmentNumber")
    public GetDashStreamingSessionUrlRequestBodyDisplayFragmentNumberEnum displayFragmentNumber;
    public GetDashStreamingSessionUrlRequestBody withDisplayFragmentNumber(GetDashStreamingSessionUrlRequestBodyDisplayFragmentNumberEnum displayFragmentNumber) {
        this.displayFragmentNumber = displayFragmentNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayFragmentTimestamp")
    public GetDashStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum displayFragmentTimestamp;
    public GetDashStreamingSessionUrlRequestBody withDisplayFragmentTimestamp(GetDashStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum displayFragmentTimestamp) {
        this.displayFragmentTimestamp = displayFragmentTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Expires")
    public Long expires;
    public GetDashStreamingSessionUrlRequestBody withExpires(Long expires) {
        this.expires = expires;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxManifestFragmentResults")
    public Long maxManifestFragmentResults;
    public GetDashStreamingSessionUrlRequestBody withMaxManifestFragmentResults(Long maxManifestFragmentResults) {
        this.maxManifestFragmentResults = maxManifestFragmentResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlaybackMode")
    public GetDashStreamingSessionUrlRequestBodyPlaybackModeEnum playbackMode;
    public GetDashStreamingSessionUrlRequestBody withPlaybackMode(GetDashStreamingSessionUrlRequestBodyPlaybackModeEnum playbackMode) {
        this.playbackMode = playbackMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamARN")
    public String streamARN;
    public GetDashStreamingSessionUrlRequestBody withStreamArn(String streamARN) {
        this.streamARN = streamARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamName")
    public String streamName;
    public GetDashStreamingSessionUrlRequestBody withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}