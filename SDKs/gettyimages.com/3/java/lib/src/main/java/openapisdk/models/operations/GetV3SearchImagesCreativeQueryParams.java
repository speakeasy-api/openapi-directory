package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3SearchImagesCreativeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=age_of_people")
    public openapisdk.models.shared.AgeOfPeopleFilterTypeEnum[] ageOfPeople;
    public GetV3SearchImagesCreativeQueryParams withAgeOfPeople(openapisdk.models.shared.AgeOfPeopleFilterTypeEnum[] ageOfPeople) {
        this.ageOfPeople = ageOfPeople;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=artists")
    public String artists;
    public GetV3SearchImagesCreativeQueryParams withArtists(String artists) {
        this.artists = artists;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=collection_codes")
    public String[] collectionCodes;
    public GetV3SearchImagesCreativeQueryParams withCollectionCodes(String[] collectionCodes) {
        this.collectionCodes = collectionCodes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=collections_filter_type")
    public openapisdk.models.shared.CollectionsFilterTypeEnum collectionsFilterType;
    public GetV3SearchImagesCreativeQueryParams withCollectionsFilterType(openapisdk.models.shared.CollectionsFilterTypeEnum collectionsFilterType) {
        this.collectionsFilterType = collectionsFilterType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=color")
    public String color;
    public GetV3SearchImagesCreativeQueryParams withColor(String color) {
        this.color = color;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=compositions")
    public openapisdk.models.shared.CompositionsFilterTypeEnum[] compositions;
    public GetV3SearchImagesCreativeQueryParams withCompositions(openapisdk.models.shared.CompositionsFilterTypeEnum[] compositions) {
        this.compositions = compositions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=download_product")
    public String downloadProduct;
    public GetV3SearchImagesCreativeQueryParams withDownloadProduct(String downloadProduct) {
        this.downloadProduct = downloadProduct;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed_content_only")
    public Boolean embedContentOnly;
    public GetV3SearchImagesCreativeQueryParams withEmbedContentOnly(Boolean embedContentOnly) {
        this.embedContentOnly = embedContentOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=ethnicity")
    public openapisdk.models.shared.EthnicityFilterTypeEnum[] ethnicity;
    public GetV3SearchImagesCreativeQueryParams withEthnicity(openapisdk.models.shared.EthnicityFilterTypeEnum[] ethnicity) {
        this.ethnicity = ethnicity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_editorial_use_only")
    public Boolean excludeEditorialUseOnly;
    public GetV3SearchImagesCreativeQueryParams withExcludeEditorialUseOnly(Boolean excludeEditorialUseOnly) {
        this.excludeEditorialUseOnly = excludeEditorialUseOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_nudity")
    public Boolean excludeNudity;
    public GetV3SearchImagesCreativeQueryParams withExcludeNudity(Boolean excludeNudity) {
        this.excludeNudity = excludeNudity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=facet_fields")
    public openapisdk.models.shared.CreateImageSearchFacetsFieldsEnum[] facetFields;
    public GetV3SearchImagesCreativeQueryParams withFacetFields(openapisdk.models.shared.CreateImageSearchFacetsFieldsEnum[] facetFields) {
        this.facetFields = facetFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facet_max_count")
    public Integer facetMaxCount;
    public GetV3SearchImagesCreativeQueryParams withFacetMaxCount(Integer facetMaxCount) {
        this.facetMaxCount = facetMaxCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public openapisdk.models.shared.CreativeImagesFieldValuesEnum[] fields;
    public GetV3SearchImagesCreativeQueryParams withFields(openapisdk.models.shared.CreativeImagesFieldValuesEnum[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=file_types")
    public openapisdk.models.shared.SearchFileTypeEnum[] fileTypes;
    public GetV3SearchImagesCreativeQueryParams withFileTypes(openapisdk.models.shared.SearchFileTypeEnum[] fileTypes) {
        this.fileTypes = fileTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=graphical_styles")
    public openapisdk.models.shared.GraphicalStyleEnum[] graphicalStyles;
    public GetV3SearchImagesCreativeQueryParams withGraphicalStyles(openapisdk.models.shared.GraphicalStyleEnum[] graphicalStyles) {
        this.graphicalStyles = graphicalStyles;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=graphical_styles_filter_type")
    public openapisdk.models.shared.GraphicalStylesFilterTypeEnum graphicalStylesFilterType;
    public GetV3SearchImagesCreativeQueryParams withGraphicalStylesFilterType(openapisdk.models.shared.GraphicalStylesFilterTypeEnum graphicalStylesFilterType) {
        this.graphicalStylesFilterType = graphicalStylesFilterType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_facets")
    public Boolean includeFacets;
    public GetV3SearchImagesCreativeQueryParams withIncludeFacets(Boolean includeFacets) {
        this.includeFacets = includeFacets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_related_searches")
    public Boolean includeRelatedSearches;
    public GetV3SearchImagesCreativeQueryParams withIncludeRelatedSearches(Boolean includeRelatedSearches) {
        this.includeRelatedSearches = includeRelatedSearches;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=keyword_ids")
    public Integer[] keywordIds;
    public GetV3SearchImagesCreativeQueryParams withKeywordIds(Integer[] keywordIds) {
        this.keywordIds = keywordIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minimum_size")
    public openapisdk.models.shared.TeeShirtSizeEnum minimumSize;
    public GetV3SearchImagesCreativeQueryParams withMinimumSize(openapisdk.models.shared.TeeShirtSizeEnum minimumSize) {
        this.minimumSize = minimumSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=number_of_people")
    public openapisdk.models.shared.NumberOfPeopleFilterTypeEnum[] numberOfPeople;
    public GetV3SearchImagesCreativeQueryParams withNumberOfPeople(openapisdk.models.shared.NumberOfPeopleFilterTypeEnum[] numberOfPeople) {
        this.numberOfPeople = numberOfPeople;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=orientations")
    public openapisdk.models.shared.OrientationRequestEnum[] orientations;
    public GetV3SearchImagesCreativeQueryParams withOrientations(openapisdk.models.shared.OrientationRequestEnum[] orientations) {
        this.orientations = orientations;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetV3SearchImagesCreativeQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Integer pageSize;
    public GetV3SearchImagesCreativeQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=phrase")
    public String phrase;
    public GetV3SearchImagesCreativeQueryParams withPhrase(String phrase) {
        this.phrase = phrase;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=safe_search")
    public Boolean safeSearch;
    public GetV3SearchImagesCreativeQueryParams withSafeSearch(Boolean safeSearch) {
        this.safeSearch = safeSearch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_order")
    public openapisdk.models.shared.CreativeImageSortOrderEnum sortOrder;
    public GetV3SearchImagesCreativeQueryParams withSortOrder(openapisdk.models.shared.CreativeImageSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}