package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelColumn
 * The channel column
**/
public class ChannelColumn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelColumnDescription")
    public String channelColumnDescription;
    public ChannelColumn withChannelColumnDescription(String channelColumnDescription) {
        this.channelColumnDescription = channelColumnDescription;
        return this;
    }
    @JsonProperty("channelColumnId")
    public String channelColumnId;
    public ChannelColumn withChannelColumnId(String channelColumnId) {
        this.channelColumnId = channelColumnId;
        return this;
    }
    @JsonProperty("channelColumnName")
    public String channelColumnName;
    public ChannelColumn withChannelColumnName(String channelColumnName) {
        this.channelColumnName = channelColumnName;
        return this;
    }
    @JsonProperty("configuration")
    public ChannelColumnConfiguration configuration;
    public ChannelColumn withConfiguration(ChannelColumnConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonProperty("position")
    public Long position;
    public ChannelColumn withPosition(Long position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictedValues")
    public java.util.Map<String, String> restrictedValues;
    public ChannelColumn withRestrictedValues(java.util.Map<String, String> restrictedValues) {
        this.restrictedValues = restrictedValues;
        return this;
    }
    @JsonProperty("showInMapping")
    public Boolean showInMapping;
    public ChannelColumn withShowInMapping(Boolean showInMapping) {
        this.showInMapping = showInMapping;
        return this;
    }
}