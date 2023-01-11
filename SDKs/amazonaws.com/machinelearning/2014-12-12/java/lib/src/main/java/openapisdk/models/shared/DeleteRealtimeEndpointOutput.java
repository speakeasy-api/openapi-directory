package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteRealtimeEndpointOutput
 * <p>Represents the output of an <code>DeleteRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>. </p>
**/
public class DeleteRealtimeEndpointOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MLModelId")
    public String mlModelId;
    public DeleteRealtimeEndpointOutput withMlModelId(String mlModelId) {
        this.mlModelId = mlModelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RealtimeEndpointInfo")
    public RealtimeEndpointInfo realtimeEndpointInfo;
    public DeleteRealtimeEndpointOutput withRealtimeEndpointInfo(RealtimeEndpointInfo realtimeEndpointInfo) {
        this.realtimeEndpointInfo = realtimeEndpointInfo;
        return this;
    }
}