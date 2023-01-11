package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Source
 * Dataflow details for the source side.
**/
public class Source {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configDetails")
    public ConfigDetails configDetails;
    public Source withConfigDetails(ConfigDetails configDetails) {
        this.configDetails = configDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configId")
    public String configId;
    public Source withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configType")
    public ConfigCapabilityTypeEnum configType;
    public Source withConfigType(ConfigCapabilityTypeEnum configType) {
        this.configType = configType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataflowSourceRegion")
    public String dataflowSourceRegion;
    public Source withDataflowSourceRegion(String dataflowSourceRegion) {
        this.dataflowSourceRegion = dataflowSourceRegion;
        return this;
    }
}