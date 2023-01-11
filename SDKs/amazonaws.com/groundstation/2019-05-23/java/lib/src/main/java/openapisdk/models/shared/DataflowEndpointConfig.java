package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataflowEndpointConfig
 * Information about the dataflow endpoint <code>Config</code>.
**/
public class DataflowEndpointConfig {
    @JsonProperty("dataflowEndpointName")
    public String dataflowEndpointName;
    public DataflowEndpointConfig withDataflowEndpointName(String dataflowEndpointName) {
        this.dataflowEndpointName = dataflowEndpointName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataflowEndpointRegion")
    public String dataflowEndpointRegion;
    public DataflowEndpointConfig withDataflowEndpointRegion(String dataflowEndpointRegion) {
        this.dataflowEndpointRegion = dataflowEndpointRegion;
        return this;
    }
}