package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RuleSource {
    @JsonProperty("channelFilter")
    public String channelFilter;
    public RuleSource withChannelFilter(String channelFilter) {
        this.channelFilter = channelFilter;
        return this;
    }
    @JsonProperty("type")
    public RuleSourceTypeEnum type;
    public RuleSource withType(RuleSourceTypeEnum type) {
        this.type = type;
        return this;
    }
}