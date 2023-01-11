package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetHlsStreamingSessionUrlRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContainerFormat")
    public GetHlsStreamingSessionUrlRequestBodyContainerFormatEnum containerFormat;
    public GetHlsStreamingSessionUrlRequestBody withContainerFormat(GetHlsStreamingSessionUrlRequestBodyContainerFormatEnum containerFormat) {
        this.containerFormat = containerFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DiscontinuityMode")
    public GetHlsStreamingSessionUrlRequestBodyDiscontinuityModeEnum discontinuityMode;
    public GetHlsStreamingSessionUrlRequestBody withDiscontinuityMode(GetHlsStreamingSessionUrlRequestBodyDiscontinuityModeEnum discontinuityMode) {
        this.discontinuityMode = discontinuityMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayFragmentTimestamp")
    public GetHlsStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum displayFragmentTimestamp;
    public GetHlsStreamingSessionUrlRequestBody withDisplayFragmentTimestamp(GetHlsStreamingSessionUrlRequestBodyDisplayFragmentTimestampEnum displayFragmentTimestamp) {
        this.displayFragmentTimestamp = displayFragmentTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Expires")
    public Long expires;
    public GetHlsStreamingSessionUrlRequestBody withExpires(Long expires) {
        this.expires = expires;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HLSFragmentSelector")
    public GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector hlsFragmentSelector;
    public GetHlsStreamingSessionUrlRequestBody withHlsFragmentSelector(GetHlsStreamingSessionUrlRequestBodyHlsFragmentSelector hlsFragmentSelector) {
        this.hlsFragmentSelector = hlsFragmentSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxMediaPlaylistFragmentResults")
    public Long maxMediaPlaylistFragmentResults;
    public GetHlsStreamingSessionUrlRequestBody withMaxMediaPlaylistFragmentResults(Long maxMediaPlaylistFragmentResults) {
        this.maxMediaPlaylistFragmentResults = maxMediaPlaylistFragmentResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlaybackMode")
    public GetHlsStreamingSessionUrlRequestBodyPlaybackModeEnum playbackMode;
    public GetHlsStreamingSessionUrlRequestBody withPlaybackMode(GetHlsStreamingSessionUrlRequestBodyPlaybackModeEnum playbackMode) {
        this.playbackMode = playbackMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamARN")
    public String streamARN;
    public GetHlsStreamingSessionUrlRequestBody withStreamArn(String streamARN) {
        this.streamARN = streamARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamName")
    public String streamName;
    public GetHlsStreamingSessionUrlRequestBody withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}