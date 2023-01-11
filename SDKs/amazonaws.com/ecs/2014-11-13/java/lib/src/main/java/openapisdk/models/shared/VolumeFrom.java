package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeFrom
 * Details on a data volume from another container in the same task definition.
**/
public class VolumeFrom {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readOnly")
    public Boolean readOnly;
    public VolumeFrom withReadOnly(Boolean readOnly) {
        this.readOnly = readOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceContainer")
    public String sourceContainer;
    public VolumeFrom withSourceContainer(String sourceContainer) {
        this.sourceContainer = sourceContainer;
        return this;
    }
}