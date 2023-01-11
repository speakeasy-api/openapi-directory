package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3SearchVideosEditorialQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=age_of_people")
    public openapisdk.models.shared.AgeOfPeopleFilterTypeEnum[] ageOfPeople;
    public GetV3SearchVideosEditorialQueryParams withAgeOfPeople(openapisdk.models.shared.AgeOfPeopleFilterTypeEnum[] ageOfPeople) {
        this.ageOfPeople = ageOfPeople;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=artists")
    public String artists;
    public GetV3SearchVideosEditorialQueryParams withArtists(String artists) {
        this.artists = artists;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=aspect_ratios")
    public openapisdk.models.shared.VideoAspectRatioFilterTypeEnum[] aspectRatios;
    public GetV3SearchVideosEditorialQueryParams withAspectRatios(openapisdk.models.shared.VideoAspectRatioFilterTypeEnum[] aspectRatios) {
        this.aspectRatios = aspectRatios;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=collection_codes")
    public String[] collectionCodes;
    public GetV3SearchVideosEditorialQueryParams withCollectionCodes(String[] collectionCodes) {
        this.collectionCodes = collectionCodes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=collections_filter_type")
    public openapisdk.models.shared.CollectionsFilterTypeEnum collectionsFilterType;
    public GetV3SearchVideosEditorialQueryParams withCollectionsFilterType(openapisdk.models.shared.CollectionsFilterTypeEnum collectionsFilterType) {
        this.collectionsFilterType = collectionsFilterType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=compositions")
    public openapisdk.models.shared.CompositionsFilterTypeEnum[] compositions;
    public GetV3SearchVideosEditorialQueryParams withCompositions(openapisdk.models.shared.CompositionsFilterTypeEnum[] compositions) {
        this.compositions = compositions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=download_product")
    public String downloadProduct;
    public GetV3SearchVideosEditorialQueryParams withDownloadProduct(String downloadProduct) {
        this.downloadProduct = downloadProduct;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=editorial_video_types")
    public openapisdk.models.shared.EditorialVideoTypeEnum[] editorialVideoTypes;
    public GetV3SearchVideosEditorialQueryParams withEditorialVideoTypes(openapisdk.models.shared.EditorialVideoTypeEnum[] editorialVideoTypes) {
        this.editorialVideoTypes = editorialVideoTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=entity_uris")
    public String[] entityUris;
    public GetV3SearchVideosEditorialQueryParams withEntityUris(String[] entityUris) {
        this.entityUris = entityUris;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=facet_fields")
    public openapisdk.models.shared.EditorialVideoSearchFacetsFieldsEnum[] facetFields;
    public GetV3SearchVideosEditorialQueryParams withFacetFields(openapisdk.models.shared.EditorialVideoSearchFacetsFieldsEnum[] facetFields) {
        this.facetFields = facetFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facet_max_count")
    public Integer facetMaxCount;
    public GetV3SearchVideosEditorialQueryParams withFacetMaxCount(Integer facetMaxCount) {
        this.facetMaxCount = facetMaxCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public openapisdk.models.shared.EditorialVideosFieldValuesEnum[] fields;
    public GetV3SearchVideosEditorialQueryParams withFields(openapisdk.models.shared.EditorialVideosFieldValuesEnum[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format_available")
    public openapisdk.models.shared.VideoFormatsRequestEnum formatAvailable;
    public GetV3SearchVideosEditorialQueryParams withFormatAvailable(openapisdk.models.shared.VideoFormatsRequestEnum formatAvailable) {
        this.formatAvailable = formatAvailable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=frame_rates")
    public openapisdk.models.shared.VideoFrameRatesEnum[] frameRates;
    public GetV3SearchVideosEditorialQueryParams withFrameRates(openapisdk.models.shared.VideoFrameRatesEnum[] frameRates) {
        this.frameRates = frameRates;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=image_techniques")
    public openapisdk.models.shared.ImageTechniquesFilterTypeEnum[] imageTechniques;
    public GetV3SearchVideosEditorialQueryParams withImageTechniques(openapisdk.models.shared.ImageTechniquesFilterTypeEnum[] imageTechniques) {
        this.imageTechniques = imageTechniques;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_facets")
    public Boolean includeFacets;
    public GetV3SearchVideosEditorialQueryParams withIncludeFacets(Boolean includeFacets) {
        this.includeFacets = includeFacets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_related_searches")
    public Boolean includeRelatedSearches;
    public GetV3SearchVideosEditorialQueryParams withIncludeRelatedSearches(Boolean includeRelatedSearches) {
        this.includeRelatedSearches = includeRelatedSearches;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=keyword_ids")
    public Integer[] keywordIds;
    public GetV3SearchVideosEditorialQueryParams withKeywordIds(Integer[] keywordIds) {
        this.keywordIds = keywordIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_clip_length")
    public Integer maxClipLength;
    public GetV3SearchVideosEditorialQueryParams withMaxClipLength(Integer maxClipLength) {
        this.maxClipLength = maxClipLength;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_clip_length")
    public Integer minClipLength;
    public GetV3SearchVideosEditorialQueryParams withMinClipLength(Integer minClipLength) {
        this.minClipLength = minClipLength;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=orientations")
    public openapisdk.models.shared.VideoOrientationRequestEnum[] orientations;
    public GetV3SearchVideosEditorialQueryParams withOrientations(openapisdk.models.shared.VideoOrientationRequestEnum[] orientations) {
        this.orientations = orientations;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetV3SearchVideosEditorialQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Integer pageSize;
    public GetV3SearchVideosEditorialQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=phrase")
    public String phrase;
    public GetV3SearchVideosEditorialQueryParams withPhrase(String phrase) {
        this.phrase = phrase;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=release_status")
    public openapisdk.models.shared.ReleaseStatusEnum releaseStatus;
    public GetV3SearchVideosEditorialQueryParams withReleaseStatus(openapisdk.models.shared.ReleaseStatusEnum releaseStatus) {
        this.releaseStatus = releaseStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_order")
    public openapisdk.models.shared.SortOrderEnum sortOrder;
    public GetV3SearchVideosEditorialQueryParams withSortOrder(openapisdk.models.shared.SortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=specific_people")
    public String[] specificPeople;
    public GetV3SearchVideosEditorialQueryParams withSpecificPeople(String[] specificPeople) {
        this.specificPeople = specificPeople;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=viewpoints")
    public openapisdk.models.shared.ViewpointsFilterTypeEnum[] viewpoints;
    public GetV3SearchVideosEditorialQueryParams withViewpoints(openapisdk.models.shared.ViewpointsFilterTypeEnum[] viewpoints) {
        this.viewpoints = viewpoints;
        return this;
    }
}