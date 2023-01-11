package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingModelHaljsonEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public SettingModelHaljsonEmbeddedTags[] tags;
    public SettingModelHaljsonEmbedded withTags(SettingModelHaljsonEmbeddedTags[] tags) {
        this.tags = tags;
        return this;
    }
}