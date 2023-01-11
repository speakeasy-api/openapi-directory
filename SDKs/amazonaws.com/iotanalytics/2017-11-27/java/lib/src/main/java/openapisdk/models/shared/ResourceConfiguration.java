package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResourceConfiguration
 * The configuration of the resource used to execute the <code>containerAction</code>.
**/
public class ResourceConfiguration {
    @JsonProperty("computeType")
    public ComputeTypeEnum computeType;
    public ResourceConfiguration withComputeType(ComputeTypeEnum computeType) {
        this.computeType = computeType;
        return this;
    }
    @JsonProperty("volumeSizeInGB")
    public Long volumeSizeInGB;
    public ResourceConfiguration withVolumeSizeInGb(Long volumeSizeInGB) {
        this.volumeSizeInGB = volumeSizeInGB;
        return this;
    }
}