package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3SearchVideosCreativeByImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=asset_id")
    public String assetId;
    public GetV3SearchVideosCreativeByImageQueryParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=facet_fields")
    public openapisdk.models.shared.CreateVideoSearchFacetsFieldsEnum[] facetFields;
    public GetV3SearchVideosCreativeByImageQueryParams withFacetFields(openapisdk.models.shared.CreateVideoSearchFacetsFieldsEnum[] facetFields) {
        this.facetFields = facetFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facet_max_count")
    public Integer facetMaxCount;
    public GetV3SearchVideosCreativeByImageQueryParams withFacetMaxCount(Integer facetMaxCount) {
        this.facetMaxCount = facetMaxCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public openapisdk.models.shared.CreativeVideosFieldValuesEnum[] fields;
    public GetV3SearchVideosCreativeByImageQueryParams withFields(openapisdk.models.shared.CreativeVideosFieldValuesEnum[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=image_url")
    public String imageUrl;
    public GetV3SearchVideosCreativeByImageQueryParams withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_facets")
    public Boolean includeFacets;
    public GetV3SearchVideosCreativeByImageQueryParams withIncludeFacets(Boolean includeFacets) {
        this.includeFacets = includeFacets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetV3SearchVideosCreativeByImageQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Integer pageSize;
    public GetV3SearchVideosCreativeByImageQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=product_types")
    public String[] productTypes;
    public GetV3SearchVideosCreativeByImageQueryParams withProductTypes(String[] productTypes) {
        this.productTypes = productTypes;
        return this;
    }
}