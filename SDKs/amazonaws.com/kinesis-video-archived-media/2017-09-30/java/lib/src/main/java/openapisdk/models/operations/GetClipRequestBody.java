package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetClipRequestBody {
    @JsonProperty("ClipFragmentSelector")
    public GetClipRequestBodyClipFragmentSelector clipFragmentSelector;
    public GetClipRequestBody withClipFragmentSelector(GetClipRequestBodyClipFragmentSelector clipFragmentSelector) {
        this.clipFragmentSelector = clipFragmentSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamARN")
    public String streamARN;
    public GetClipRequestBody withStreamArn(String streamARN) {
        this.streamARN = streamARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamName")
    public String streamName;
    public GetClipRequestBody withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}