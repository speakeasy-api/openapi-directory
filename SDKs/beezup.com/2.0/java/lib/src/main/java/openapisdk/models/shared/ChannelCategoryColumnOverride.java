package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChannelCategoryColumnOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelColumnDescription")
    public String channelColumnDescription;
    public ChannelCategoryColumnOverride withChannelColumnDescription(String channelColumnDescription) {
        this.channelColumnDescription = channelColumnDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelColumnId")
    public String channelColumnId;
    public ChannelCategoryColumnOverride withChannelColumnId(String channelColumnId) {
        this.channelColumnId = channelColumnId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelColumnName")
    public String channelColumnName;
    public ChannelCategoryColumnOverride withChannelColumnName(String channelColumnName) {
        this.channelColumnName = channelColumnName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configuration")
    public ChannelColumnConfiguration configuration;
    public ChannelCategoryColumnOverride withConfiguration(ChannelColumnConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictedValues")
    public java.util.Map<String, String> restrictedValues;
    public ChannelCategoryColumnOverride withRestrictedValues(java.util.Map<String, String> restrictedValues) {
        this.restrictedValues = restrictedValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("showInMapping")
    public Boolean showInMapping;
    public ChannelCategoryColumnOverride withShowInMapping(Boolean showInMapping) {
        this.showInMapping = showInMapping;
        return this;
    }
}