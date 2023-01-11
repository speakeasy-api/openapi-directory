package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3SearchVideosCreativeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=age_of_people")
    public openapisdk.models.shared.AgeOfPeopleFilterTypeEnum[] ageOfPeople;
    public GetV3SearchVideosCreativeQueryParams withAgeOfPeople(openapisdk.models.shared.AgeOfPeopleFilterTypeEnum[] ageOfPeople) {
        this.ageOfPeople = ageOfPeople;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=artists")
    public String artists;
    public GetV3SearchVideosCreativeQueryParams withArtists(String artists) {
        this.artists = artists;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=aspect_ratios")
    public openapisdk.models.shared.VideoAspectRatioFilterTypeEnum[] aspectRatios;
    public GetV3SearchVideosCreativeQueryParams withAspectRatios(openapisdk.models.shared.VideoAspectRatioFilterTypeEnum[] aspectRatios) {
        this.aspectRatios = aspectRatios;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=collection_codes")
    public String[] collectionCodes;
    public GetV3SearchVideosCreativeQueryParams withCollectionCodes(String[] collectionCodes) {
        this.collectionCodes = collectionCodes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=collections_filter_type")
    public openapisdk.models.shared.CollectionsFilterTypeEnum collectionsFilterType;
    public GetV3SearchVideosCreativeQueryParams withCollectionsFilterType(openapisdk.models.shared.CollectionsFilterTypeEnum collectionsFilterType) {
        this.collectionsFilterType = collectionsFilterType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=compositions")
    public openapisdk.models.shared.CompositionsFilterTypeEnum[] compositions;
    public GetV3SearchVideosCreativeQueryParams withCompositions(openapisdk.models.shared.CompositionsFilterTypeEnum[] compositions) {
        this.compositions = compositions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=download_product")
    public String downloadProduct;
    public GetV3SearchVideosCreativeQueryParams withDownloadProduct(String downloadProduct) {
        this.downloadProduct = downloadProduct;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_editorial_use_only")
    public Boolean excludeEditorialUseOnly;
    public GetV3SearchVideosCreativeQueryParams withExcludeEditorialUseOnly(Boolean excludeEditorialUseOnly) {
        this.excludeEditorialUseOnly = excludeEditorialUseOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_nudity")
    public Boolean excludeNudity;
    public GetV3SearchVideosCreativeQueryParams withExcludeNudity(Boolean excludeNudity) {
        this.excludeNudity = excludeNudity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=facet_fields")
    public openapisdk.models.shared.CreateVideoSearchFacetsFieldsEnum[] facetFields;
    public GetV3SearchVideosCreativeQueryParams withFacetFields(openapisdk.models.shared.CreateVideoSearchFacetsFieldsEnum[] facetFields) {
        this.facetFields = facetFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facet_max_count")
    public Integer facetMaxCount;
    public GetV3SearchVideosCreativeQueryParams withFacetMaxCount(Integer facetMaxCount) {
        this.facetMaxCount = facetMaxCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public openapisdk.models.shared.CreativeVideosFieldValuesEnum[] fields;
    public GetV3SearchVideosCreativeQueryParams withFields(openapisdk.models.shared.CreativeVideosFieldValuesEnum[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format_available")
    public openapisdk.models.shared.VideoFormatsRequestEnum formatAvailable;
    public GetV3SearchVideosCreativeQueryParams withFormatAvailable(openapisdk.models.shared.VideoFormatsRequestEnum formatAvailable) {
        this.formatAvailable = formatAvailable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=frame_rates")
    public openapisdk.models.shared.VideoFrameRatesEnum[] frameRates;
    public GetV3SearchVideosCreativeQueryParams withFrameRates(openapisdk.models.shared.VideoFrameRatesEnum[] frameRates) {
        this.frameRates = frameRates;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=image_techniques")
    public openapisdk.models.shared.ImageTechniquesFilterTypeEnum[] imageTechniques;
    public GetV3SearchVideosCreativeQueryParams withImageTechniques(openapisdk.models.shared.ImageTechniquesFilterTypeEnum[] imageTechniques) {
        this.imageTechniques = imageTechniques;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_facets")
    public Boolean includeFacets;
    public GetV3SearchVideosCreativeQueryParams withIncludeFacets(Boolean includeFacets) {
        this.includeFacets = includeFacets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_related_searches")
    public Boolean includeRelatedSearches;
    public GetV3SearchVideosCreativeQueryParams withIncludeRelatedSearches(Boolean includeRelatedSearches) {
        this.includeRelatedSearches = includeRelatedSearches;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=keyword_ids")
    public Integer[] keywordIds;
    public GetV3SearchVideosCreativeQueryParams withKeywordIds(Integer[] keywordIds) {
        this.keywordIds = keywordIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=license_models")
    public openapisdk.models.shared.LicenseModelVideoRequestEnum[] licenseModels;
    public GetV3SearchVideosCreativeQueryParams withLicenseModels(openapisdk.models.shared.LicenseModelVideoRequestEnum[] licenseModels) {
        this.licenseModels = licenseModels;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_clip_length")
    public Integer maxClipLength;
    public GetV3SearchVideosCreativeQueryParams withMaxClipLength(Integer maxClipLength) {
        this.maxClipLength = maxClipLength;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_clip_length")
    public Integer minClipLength;
    public GetV3SearchVideosCreativeQueryParams withMinClipLength(Integer minClipLength) {
        this.minClipLength = minClipLength;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=orientations")
    public openapisdk.models.shared.VideoOrientationRequestEnum[] orientations;
    public GetV3SearchVideosCreativeQueryParams withOrientations(openapisdk.models.shared.VideoOrientationRequestEnum[] orientations) {
        this.orientations = orientations;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetV3SearchVideosCreativeQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Integer pageSize;
    public GetV3SearchVideosCreativeQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=phrase")
    public String phrase;
    public GetV3SearchVideosCreativeQueryParams withPhrase(String phrase) {
        this.phrase = phrase;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=release_status")
    public openapisdk.models.shared.ReleaseStatusEnum releaseStatus;
    public GetV3SearchVideosCreativeQueryParams withReleaseStatus(openapisdk.models.shared.ReleaseStatusEnum releaseStatus) {
        this.releaseStatus = releaseStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=safe_search")
    public Boolean safeSearch;
    public GetV3SearchVideosCreativeQueryParams withSafeSearch(Boolean safeSearch) {
        this.safeSearch = safeSearch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_order")
    public openapisdk.models.shared.CreativeVideoSortOrderEnum sortOrder;
    public GetV3SearchVideosCreativeQueryParams withSortOrder(openapisdk.models.shared.CreativeVideoSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=viewpoints")
    public openapisdk.models.shared.ViewpointsFilterTypeEnum[] viewpoints;
    public GetV3SearchVideosCreativeQueryParams withViewpoints(openapisdk.models.shared.ViewpointsFilterTypeEnum[] viewpoints) {
        this.viewpoints = viewpoints;
        return this;
    }
}