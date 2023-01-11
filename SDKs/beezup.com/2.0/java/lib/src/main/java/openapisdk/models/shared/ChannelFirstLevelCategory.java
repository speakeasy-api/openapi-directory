package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelFirstLevelCategory
 * The first level category with his sub categories
**/
public class ChannelFirstLevelCategory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelCategoryChannelCode")
    public String channelCategoryChannelCode;
    public ChannelFirstLevelCategory withChannelCategoryChannelCode(String channelCategoryChannelCode) {
        this.channelCategoryChannelCode = channelCategoryChannelCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelCategoryColumnOverrides")
    public java.util.Map<String, ChannelCategoryColumnOverride> channelCategoryColumnOverrides;
    public ChannelFirstLevelCategory withChannelCategoryColumnOverrides(java.util.Map<String, ChannelCategoryColumnOverride> channelCategoryColumnOverrides) {
        this.channelCategoryColumnOverrides = channelCategoryColumnOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelCategoryDefaultCost")
    public Double channelCategoryDefaultCost;
    public ChannelFirstLevelCategory withChannelCategoryDefaultCost(Double channelCategoryDefaultCost) {
        this.channelCategoryDefaultCost = channelCategoryDefaultCost;
        return this;
    }
    @JsonProperty("channelCategoryId")
    public String channelCategoryId;
    public ChannelFirstLevelCategory withChannelCategoryId(String channelCategoryId) {
        this.channelCategoryId = channelCategoryId;
        return this;
    }
    @JsonProperty("channelCategoryLevel")
    public Integer channelCategoryLevel;
    public ChannelFirstLevelCategory withChannelCategoryLevel(Integer channelCategoryLevel) {
        this.channelCategoryLevel = channelCategoryLevel;
        return this;
    }
    @JsonProperty("channelCategoryName")
    public String channelCategoryName;
    public ChannelFirstLevelCategory withChannelCategoryName(String channelCategoryName) {
        this.channelCategoryName = channelCategoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subCategories")
    public ChannelCategory[] subCategories;
    public ChannelFirstLevelCategory withSubCategories(ChannelCategory[] subCategories) {
        this.subCategories = subCategories;
        return this;
    }
}