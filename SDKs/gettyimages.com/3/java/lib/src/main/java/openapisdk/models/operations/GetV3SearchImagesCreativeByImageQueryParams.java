package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3SearchImagesCreativeByImageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=asset_id")
    public String assetId;
    public GetV3SearchImagesCreativeByImageQueryParams withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=facet_fields")
    public openapisdk.models.shared.CreateImageSearchFacetsFieldsEnum[] facetFields;
    public GetV3SearchImagesCreativeByImageQueryParams withFacetFields(openapisdk.models.shared.CreateImageSearchFacetsFieldsEnum[] facetFields) {
        this.facetFields = facetFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facet_max_count")
    public Integer facetMaxCount;
    public GetV3SearchImagesCreativeByImageQueryParams withFacetMaxCount(Integer facetMaxCount) {
        this.facetMaxCount = facetMaxCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public openapisdk.models.shared.CreativeImagesFieldValuesEnum[] fields;
    public GetV3SearchImagesCreativeByImageQueryParams withFields(openapisdk.models.shared.CreativeImagesFieldValuesEnum[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=image_fingerprint")
    public String imageFingerprint;
    public GetV3SearchImagesCreativeByImageQueryParams withImageFingerprint(String imageFingerprint) {
        this.imageFingerprint = imageFingerprint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=image_url")
    public String imageUrl;
    public GetV3SearchImagesCreativeByImageQueryParams withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_facets")
    public Boolean includeFacets;
    public GetV3SearchImagesCreativeByImageQueryParams withIncludeFacets(Boolean includeFacets) {
        this.includeFacets = includeFacets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetV3SearchImagesCreativeByImageQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Integer pageSize;
    public GetV3SearchImagesCreativeByImageQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=product_types")
    public String[] productTypes;
    public GetV3SearchImagesCreativeByImageQueryParams withProductTypes(String[] productTypes) {
        this.productTypes = productTypes;
        return this;
    }
}