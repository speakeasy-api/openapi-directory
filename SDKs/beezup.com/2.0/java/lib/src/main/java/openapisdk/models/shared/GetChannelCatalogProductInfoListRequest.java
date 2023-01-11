package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetChannelCatalogProductInfoListRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catalogCategoryFilter")
    public BeezUpCommonCatalogCategoryFilter catalogCategoryFilter;
    public GetChannelCatalogProductInfoListRequest withCatalogCategoryFilter(BeezUpCommonCatalogCategoryFilter catalogCategoryFilter) {
        this.catalogCategoryFilter = catalogCategoryFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelCategoryFilter")
    public BeezUpCommonChannelCategoryFilter channelCategoryFilter;
    public GetChannelCatalogProductInfoListRequest withChannelCategoryFilter(BeezUpCommonChannelCategoryFilter channelCategoryFilter) {
        this.channelCategoryFilter = channelCategoryFilter;
        return this;
    }
    @JsonProperty("criteria")
    public ProductSetVisibilityCriteria criteria;
    public GetChannelCatalogProductInfoListRequest withCriteria(ProductSetVisibilityCriteria criteria) {
        this.criteria = criteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overridden")
    public Boolean overridden;
    public GetChannelCatalogProductInfoListRequest withOverridden(Boolean overridden) {
        this.overridden = overridden;
        return this;
    }
    @JsonProperty("pageNumber")
    public Integer pageNumber;
    public GetChannelCatalogProductInfoListRequest withPageNumber(Integer pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonProperty("pageSize")
    public Integer pageSize;
    public GetChannelCatalogProductInfoListRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productFilters")
    public ChannelCatalogProductFilters productFilters;
    public GetChannelCatalogProductInfoListRequest withProductFilters(ChannelCatalogProductFilters productFilters) {
        this.productFilters = productFilters;
        return this;
    }
}