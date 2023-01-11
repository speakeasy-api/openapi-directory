package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3SearchImagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=age_of_people")
    public openapisdk.models.shared.AgeOfPeopleFilterTypeEnum[] ageOfPeople;
    public GetV3SearchImagesQueryParams withAgeOfPeople(openapisdk.models.shared.AgeOfPeopleFilterTypeEnum[] ageOfPeople) {
        this.ageOfPeople = ageOfPeople;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=artists")
    public String artists;
    public GetV3SearchImagesQueryParams withArtists(String artists) {
        this.artists = artists;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=collection_codes")
    public String[] collectionCodes;
    public GetV3SearchImagesQueryParams withCollectionCodes(String[] collectionCodes) {
        this.collectionCodes = collectionCodes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=collections_filter_type")
    public openapisdk.models.shared.CollectionsFilterTypeEnum collectionsFilterType;
    public GetV3SearchImagesQueryParams withCollectionsFilterType(openapisdk.models.shared.CollectionsFilterTypeEnum collectionsFilterType) {
        this.collectionsFilterType = collectionsFilterType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=color")
    public String color;
    public GetV3SearchImagesQueryParams withColor(String color) {
        this.color = color;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=compositions")
    public openapisdk.models.shared.CompositionsFilterTypeEnum[] compositions;
    public GetV3SearchImagesQueryParams withCompositions(openapisdk.models.shared.CompositionsFilterTypeEnum[] compositions) {
        this.compositions = compositions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=download_product")
    public String downloadProduct;
    public GetV3SearchImagesQueryParams withDownloadProduct(String downloadProduct) {
        this.downloadProduct = downloadProduct;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed_content_only")
    public Boolean embedContentOnly;
    public GetV3SearchImagesQueryParams withEmbedContentOnly(Boolean embedContentOnly) {
        this.embedContentOnly = embedContentOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=ethnicity")
    public openapisdk.models.shared.EthnicityFilterTypeEnum[] ethnicity;
    public GetV3SearchImagesQueryParams withEthnicity(openapisdk.models.shared.EthnicityFilterTypeEnum[] ethnicity) {
        this.ethnicity = ethnicity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=event_ids")
    public Integer[] eventIds;
    public GetV3SearchImagesQueryParams withEventIds(Integer[] eventIds) {
        this.eventIds = eventIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_nudity")
    public Boolean excludeNudity;
    public GetV3SearchImagesQueryParams withExcludeNudity(Boolean excludeNudity) {
        this.excludeNudity = excludeNudity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public openapisdk.models.shared.ImagesFieldValuesEnum[] fields;
    public GetV3SearchImagesQueryParams withFields(openapisdk.models.shared.ImagesFieldValuesEnum[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=file_types")
    public openapisdk.models.shared.SearchFileTypeEnum[] fileTypes;
    public GetV3SearchImagesQueryParams withFileTypes(openapisdk.models.shared.SearchFileTypeEnum[] fileTypes) {
        this.fileTypes = fileTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=graphical_styles")
    public openapisdk.models.shared.GraphicalStyleEnum[] graphicalStyles;
    public GetV3SearchImagesQueryParams withGraphicalStyles(openapisdk.models.shared.GraphicalStyleEnum[] graphicalStyles) {
        this.graphicalStyles = graphicalStyles;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=graphical_styles_filter_type")
    public openapisdk.models.shared.GraphicalStylesFilterTypeEnum graphicalStylesFilterType;
    public GetV3SearchImagesQueryParams withGraphicalStylesFilterType(openapisdk.models.shared.GraphicalStylesFilterTypeEnum graphicalStylesFilterType) {
        this.graphicalStylesFilterType = graphicalStylesFilterType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_related_searches")
    public Boolean includeRelatedSearches;
    public GetV3SearchImagesQueryParams withIncludeRelatedSearches(Boolean includeRelatedSearches) {
        this.includeRelatedSearches = includeRelatedSearches;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=keyword_ids")
    public Integer[] keywordIds;
    public GetV3SearchImagesQueryParams withKeywordIds(Integer[] keywordIds) {
        this.keywordIds = keywordIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minimum_size")
    public openapisdk.models.shared.TeeShirtSizeEnum minimumSize;
    public GetV3SearchImagesQueryParams withMinimumSize(openapisdk.models.shared.TeeShirtSizeEnum minimumSize) {
        this.minimumSize = minimumSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=number_of_people")
    public openapisdk.models.shared.NumberOfPeopleFilterTypeEnum[] numberOfPeople;
    public GetV3SearchImagesQueryParams withNumberOfPeople(openapisdk.models.shared.NumberOfPeopleFilterTypeEnum[] numberOfPeople) {
        this.numberOfPeople = numberOfPeople;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=orientations")
    public openapisdk.models.shared.OrientationRequestEnum[] orientations;
    public GetV3SearchImagesQueryParams withOrientations(openapisdk.models.shared.OrientationRequestEnum[] orientations) {
        this.orientations = orientations;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetV3SearchImagesQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Integer pageSize;
    public GetV3SearchImagesQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=phrase")
    public String phrase;
    public GetV3SearchImagesQueryParams withPhrase(String phrase) {
        this.phrase = phrase;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_order")
    public openapisdk.models.shared.BlendedImageSortOrderEnum sortOrder;
    public GetV3SearchImagesQueryParams withSortOrder(openapisdk.models.shared.BlendedImageSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=specific_people")
    public String[] specificPeople;
    public GetV3SearchImagesQueryParams withSpecificPeople(String[] specificPeople) {
        this.specificPeople = specificPeople;
        return this;
    }
}