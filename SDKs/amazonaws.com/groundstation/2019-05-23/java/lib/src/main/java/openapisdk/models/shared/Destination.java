package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Destination
 * Dataflow details for the destination side.
**/
public class Destination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configDetails")
    public ConfigDetails configDetails;
    public Destination withConfigDetails(ConfigDetails configDetails) {
        this.configDetails = configDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configId")
    public String configId;
    public Destination withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configType")
    public ConfigCapabilityTypeEnum configType;
    public Destination withConfigType(ConfigCapabilityTypeEnum configType) {
        this.configType = configType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataflowDestinationRegion")
    public String dataflowDestinationRegion;
    public Destination withDataflowDestinationRegion(String dataflowDestinationRegion) {
        this.dataflowDestinationRegion = dataflowDestinationRegion;
        return this;
    }
}