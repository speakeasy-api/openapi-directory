package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChannelRootCategory
 * Get channel first level category list
**/
public class ChannelRootCategory {
    @JsonProperty("firstLevelCategories")
    public ChannelFirstLevelCategory[] firstLevelCategories;
    public ChannelRootCategory withFirstLevelCategories(ChannelFirstLevelCategory[] firstLevelCategories) {
        this.firstLevelCategories = firstLevelCategories;
        return this;
    }
}