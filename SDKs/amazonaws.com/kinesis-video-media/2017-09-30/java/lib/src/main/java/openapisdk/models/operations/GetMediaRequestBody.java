package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMediaRequestBody {
    @JsonProperty("StartSelector")
    public GetMediaRequestBodyStartSelector startSelector;
    public GetMediaRequestBody withStartSelector(GetMediaRequestBodyStartSelector startSelector) {
        this.startSelector = startSelector;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamARN")
    public String streamARN;
    public GetMediaRequestBody withStreamArn(String streamARN) {
        this.streamARN = streamARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamName")
    public String streamName;
    public GetMediaRequestBody withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}