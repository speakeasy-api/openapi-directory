package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddressConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BodyOverride")
    public String bodyOverride;
    public AddressConfiguration withBodyOverride(String bodyOverride) {
        this.bodyOverride = bodyOverride;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChannelType")
    public ChannelTypeEnum channelType;
    public AddressConfiguration withChannelType(ChannelTypeEnum channelType) {
        this.channelType = channelType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Context")
    public java.util.Map<String, String> context;
    public AddressConfiguration withContext(java.util.Map<String, String> context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RawContent")
    public String rawContent;
    public AddressConfiguration withRawContent(String rawContent) {
        this.rawContent = rawContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Substitutions")
    public java.util.Map<String, String[]> substitutions;
    public AddressConfiguration withSubstitutions(java.util.Map<String, String[]> substitutions) {
        this.substitutions = substitutions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TitleOverride")
    public String titleOverride;
    public AddressConfiguration withTitleOverride(String titleOverride) {
        this.titleOverride = titleOverride;
        return this;
    }
}