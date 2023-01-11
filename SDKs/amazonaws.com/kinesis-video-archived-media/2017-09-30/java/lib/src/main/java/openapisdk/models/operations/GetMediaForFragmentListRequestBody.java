package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMediaForFragmentListRequestBody {
    @JsonProperty("Fragments")
    public String[] fragments;
    public GetMediaForFragmentListRequestBody withFragments(String[] fragments) {
        this.fragments = fragments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamARN")
    public String streamARN;
    public GetMediaForFragmentListRequestBody withStreamArn(String streamARN) {
        this.streamARN = streamARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamName")
    public String streamName;
    public GetMediaForFragmentListRequestBody withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}