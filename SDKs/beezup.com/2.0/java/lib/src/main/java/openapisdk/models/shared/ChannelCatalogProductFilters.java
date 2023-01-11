package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChannelCatalogProductFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalProductFilters")
    public java.util.Map<String, BeezUpCommonAdditionalProductFiltersValue> additionalProductFilters;
    public ChannelCatalogProductFilters withAdditionalProductFilters(java.util.Map<String, BeezUpCommonAdditionalProductFiltersValue> additionalProductFilters) {
        this.additionalProductFilters = additionalProductFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalogEans")
    public String[] catalogEans;
    public ChannelCatalogProductFilters withCatalogEans(String[] catalogEans) {
        this.catalogEans = catalogEans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalogMpns")
    public String[] catalogMpns;
    public ChannelCatalogProductFilters withCatalogMpns(String[] catalogMpns) {
        this.catalogMpns = catalogMpns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalogSkus")
    public String[] catalogSkus;
    public ChannelCatalogProductFilters withCatalogSkus(String[] catalogSkus) {
        this.catalogSkus = catalogSkus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelEans")
    public String[] channelEans;
    public ChannelCatalogProductFilters withChannelEans(String[] channelEans) {
        this.channelEans = channelEans;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelMpns")
    public String[] channelMpns;
    public ChannelCatalogProductFilters withChannelMpns(String[] channelMpns) {
        this.channelMpns = channelMpns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelSkus")
    public String[] channelSkus;
    public ChannelCatalogProductFilters withChannelSkus(String[] channelSkus) {
        this.channelSkus = channelSkus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ChannelCatalogProductFilters withTitle(String title) {
        this.title = title;
        return this;
    }
}