package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelCatalogColumnMappingWithName
 * Represent a mapping between a channel column (considering channel category mapping) and a catalog column
**/
public class ChannelCatalogColumnMappingWithName {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalogBeezUPColumnName")
    public String catalogBeezUPColumnName;
    public ChannelCatalogColumnMappingWithName withCatalogBeezUpColumnName(String catalogBeezUPColumnName) {
        this.catalogBeezUPColumnName = catalogBeezUPColumnName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalogColumnId")
    public String catalogColumnId;
    public ChannelCatalogColumnMappingWithName withCatalogColumnId(String catalogColumnId) {
        this.catalogColumnId = catalogColumnId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalogColumnName")
    public String catalogColumnName;
    public ChannelCatalogColumnMappingWithName withCatalogColumnName(String catalogColumnName) {
        this.catalogColumnName = catalogColumnName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelBeezUPColumnName")
    public String channelBeezUPColumnName;
    public ChannelCatalogColumnMappingWithName withChannelBeezUpColumnName(String channelBeezUPColumnName) {
        this.channelBeezUPColumnName = channelBeezUPColumnName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelCategoryPath")
    public String[] channelCategoryPath;
    public ChannelCatalogColumnMappingWithName withChannelCategoryPath(String[] channelCategoryPath) {
        this.channelCategoryPath = channelCategoryPath;
        return this;
    }
    @JsonProperty("channelColumnId")
    public String channelColumnId;
    public ChannelCatalogColumnMappingWithName withChannelColumnId(String channelColumnId) {
        this.channelColumnId = channelColumnId;
        return this;
    }
    @JsonProperty("channelColumnName")
    public String channelColumnName;
    public ChannelCatalogColumnMappingWithName withChannelColumnName(String channelColumnName) {
        this.channelColumnName = channelColumnName;
        return this;
    }
}