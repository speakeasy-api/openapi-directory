package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDataEndpointOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataEndpoint")
    public String dataEndpoint;
    public GetDataEndpointOutput withDataEndpoint(String dataEndpoint) {
        this.dataEndpoint = dataEndpoint;
        return this;
    }
}