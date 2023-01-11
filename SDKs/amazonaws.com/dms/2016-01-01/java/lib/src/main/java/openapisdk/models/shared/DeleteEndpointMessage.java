package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteEndpointMessage
 * <p/>
**/
public class DeleteEndpointMessage {
    @JsonProperty("EndpointArn")
    public String endpointArn;
    public DeleteEndpointMessage withEndpointArn(String endpointArn) {
        this.endpointArn = endpointArn;
        return this;
    }
}