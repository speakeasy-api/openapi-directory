package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDataEndpointRequestBody {
    @JsonProperty("APIName")
    public GetDataEndpointRequestBodyApiNameEnum apiName;
    public GetDataEndpointRequestBody withApiName(GetDataEndpointRequestBodyApiNameEnum apiName) {
        this.apiName = apiName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamARN")
    public String streamARN;
    public GetDataEndpointRequestBody withStreamArn(String streamARN) {
        this.streamARN = streamARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StreamName")
    public String streamName;
    public GetDataEndpointRequestBody withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}