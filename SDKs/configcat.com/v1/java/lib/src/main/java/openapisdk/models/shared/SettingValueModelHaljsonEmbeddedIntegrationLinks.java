package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingValueModelHaljsonEmbeddedIntegrationLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SettingValueModelHaljsonEmbeddedIntegrationLinks withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationLinkType")
    public IntegrationLinkTypeEnum integrationLinkType;
    public SettingValueModelHaljsonEmbeddedIntegrationLinks withIntegrationLinkType(IntegrationLinkTypeEnum integrationLinkType) {
        this.integrationLinkType = integrationLinkType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public SettingValueModelHaljsonEmbeddedIntegrationLinks withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public SettingValueModelHaljsonEmbeddedIntegrationLinks withUrl(String url) {
        this.url = url;
        return this;
    }
}