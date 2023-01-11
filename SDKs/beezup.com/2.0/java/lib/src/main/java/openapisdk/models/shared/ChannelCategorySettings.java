package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChannelCategorySettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mappingLeafRequired")
    public Boolean mappingLeafRequired;
    public ChannelCategorySettings withMappingLeafRequired(Boolean mappingLeafRequired) {
        this.mappingLeafRequired = mappingLeafRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mappingRequired")
    public Boolean mappingRequired;
    public ChannelCategorySettings withMappingRequired(Boolean mappingRequired) {
        this.mappingRequired = mappingRequired;
        return this;
    }
}