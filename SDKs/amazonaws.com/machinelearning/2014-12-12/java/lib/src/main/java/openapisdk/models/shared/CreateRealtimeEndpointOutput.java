package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateRealtimeEndpointOutput
 * <p>Represents the output of an <code>CreateRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>.</p> <p> <b>Note:</b> The endpoint information includes the URI of the <code>MLModel</code>; that is, the location to send online prediction requests for the specified <code>MLModel</code>.</p>
**/
public class CreateRealtimeEndpointOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MLModelId")
    public String mlModelId;
    public CreateRealtimeEndpointOutput withMlModelId(String mlModelId) {
        this.mlModelId = mlModelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RealtimeEndpointInfo")
    public RealtimeEndpointInfo realtimeEndpointInfo;
    public CreateRealtimeEndpointOutput withRealtimeEndpointInfo(RealtimeEndpointInfo realtimeEndpointInfo) {
        this.realtimeEndpointInfo = realtimeEndpointInfo;
        return this;
    }
}