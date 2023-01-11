package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetHlsStreamingSessionUrlOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HLSStreamingSessionURL")
    public String hlsStreamingSessionURL;
    public GetHlsStreamingSessionUrlOutput withHlsStreamingSessionUrl(String hlsStreamingSessionURL) {
        this.hlsStreamingSessionURL = hlsStreamingSessionURL;
        return this;
    }
}