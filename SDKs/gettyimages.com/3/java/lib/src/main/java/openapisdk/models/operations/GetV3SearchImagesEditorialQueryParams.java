package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetV3SearchImagesEditorialQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=age_of_people")
    public openapisdk.models.shared.AgeOfPeopleFilterTypeEnum[] ageOfPeople;
    public GetV3SearchImagesEditorialQueryParams withAgeOfPeople(openapisdk.models.shared.AgeOfPeopleFilterTypeEnum[] ageOfPeople) {
        this.ageOfPeople = ageOfPeople;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=artists")
    public String artists;
    public GetV3SearchImagesEditorialQueryParams withArtists(String artists) {
        this.artists = artists;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=collection_codes")
    public String[] collectionCodes;
    public GetV3SearchImagesEditorialQueryParams withCollectionCodes(String[] collectionCodes) {
        this.collectionCodes = collectionCodes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=collections_filter_type")
    public openapisdk.models.shared.CollectionsFilterTypeEnum collectionsFilterType;
    public GetV3SearchImagesEditorialQueryParams withCollectionsFilterType(openapisdk.models.shared.CollectionsFilterTypeEnum collectionsFilterType) {
        this.collectionsFilterType = collectionsFilterType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=compositions")
    public openapisdk.models.shared.CompositionsFilterTypeEnum[] compositions;
    public GetV3SearchImagesEditorialQueryParams withCompositions(openapisdk.models.shared.CompositionsFilterTypeEnum[] compositions) {
        this.compositions = compositions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_from")
    public OffsetDateTime dateFrom;
    public GetV3SearchImagesEditorialQueryParams withDateFrom(OffsetDateTime dateFrom) {
        this.dateFrom = dateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_to")
    public OffsetDateTime dateTo;
    public GetV3SearchImagesEditorialQueryParams withDateTo(OffsetDateTime dateTo) {
        this.dateTo = dateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=download_product")
    public String downloadProduct;
    public GetV3SearchImagesEditorialQueryParams withDownloadProduct(String downloadProduct) {
        this.downloadProduct = downloadProduct;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=editorial_segments")
    public openapisdk.models.shared.EditorialSegmentContractEnum[] editorialSegments;
    public GetV3SearchImagesEditorialQueryParams withEditorialSegments(openapisdk.models.shared.EditorialSegmentContractEnum[] editorialSegments) {
        this.editorialSegments = editorialSegments;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed_content_only")
    public Boolean embedContentOnly;
    public GetV3SearchImagesEditorialQueryParams withEmbedContentOnly(Boolean embedContentOnly) {
        this.embedContentOnly = embedContentOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=entity_uris")
    public String[] entityUris;
    public GetV3SearchImagesEditorialQueryParams withEntityUris(String[] entityUris) {
        this.entityUris = entityUris;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=ethnicity")
    public openapisdk.models.shared.EthnicityFilterTypeEnum[] ethnicity;
    public GetV3SearchImagesEditorialQueryParams withEthnicity(openapisdk.models.shared.EthnicityFilterTypeEnum[] ethnicity) {
        this.ethnicity = ethnicity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=event_ids")
    public Integer[] eventIds;
    public GetV3SearchImagesEditorialQueryParams withEventIds(Integer[] eventIds) {
        this.eventIds = eventIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=facet_fields")
    public openapisdk.models.shared.EditorialImageSearchFacetsFieldsEnum[] facetFields;
    public GetV3SearchImagesEditorialQueryParams withFacetFields(openapisdk.models.shared.EditorialImageSearchFacetsFieldsEnum[] facetFields) {
        this.facetFields = facetFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facet_max_count")
    public Integer facetMaxCount;
    public GetV3SearchImagesEditorialQueryParams withFacetMaxCount(Integer facetMaxCount) {
        this.facetMaxCount = facetMaxCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public openapisdk.models.shared.EditorialImagesFieldValuesEnum[] fields;
    public GetV3SearchImagesEditorialQueryParams withFields(openapisdk.models.shared.EditorialImagesFieldValuesEnum[] fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=file_types")
    public openapisdk.models.shared.SearchFileTypeEnum[] fileTypes;
    public GetV3SearchImagesEditorialQueryParams withFileTypes(openapisdk.models.shared.SearchFileTypeEnum[] fileTypes) {
        this.fileTypes = fileTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=graphical_styles")
    public openapisdk.models.shared.EditorialGraphicalStyleEnum[] graphicalStyles;
    public GetV3SearchImagesEditorialQueryParams withGraphicalStyles(openapisdk.models.shared.EditorialGraphicalStyleEnum[] graphicalStyles) {
        this.graphicalStyles = graphicalStyles;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=graphical_styles_filter_type")
    public openapisdk.models.shared.GraphicalStylesFilterTypeEnum graphicalStylesFilterType;
    public GetV3SearchImagesEditorialQueryParams withGraphicalStylesFilterType(openapisdk.models.shared.GraphicalStylesFilterTypeEnum graphicalStylesFilterType) {
        this.graphicalStylesFilterType = graphicalStylesFilterType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_facets")
    public Boolean includeFacets;
    public GetV3SearchImagesEditorialQueryParams withIncludeFacets(Boolean includeFacets) {
        this.includeFacets = includeFacets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_related_searches")
    public Boolean includeRelatedSearches;
    public GetV3SearchImagesEditorialQueryParams withIncludeRelatedSearches(Boolean includeRelatedSearches) {
        this.includeRelatedSearches = includeRelatedSearches;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=keyword_ids")
    public Integer[] keywordIds;
    public GetV3SearchImagesEditorialQueryParams withKeywordIds(Integer[] keywordIds) {
        this.keywordIds = keywordIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minimum_quality_rank")
    public Integer minimumQualityRank;
    public GetV3SearchImagesEditorialQueryParams withMinimumQualityRank(Integer minimumQualityRank) {
        this.minimumQualityRank = minimumQualityRank;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minimum_size")
    public openapisdk.models.shared.TeeShirtSizeEnum minimumSize;
    public GetV3SearchImagesEditorialQueryParams withMinimumSize(openapisdk.models.shared.TeeShirtSizeEnum minimumSize) {
        this.minimumSize = minimumSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=number_of_people")
    public openapisdk.models.shared.NumberOfPeopleFilterTypeEnum[] numberOfPeople;
    public GetV3SearchImagesEditorialQueryParams withNumberOfPeople(openapisdk.models.shared.NumberOfPeopleFilterTypeEnum[] numberOfPeople) {
        this.numberOfPeople = numberOfPeople;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=orientations")
    public openapisdk.models.shared.OrientationRequestEnum[] orientations;
    public GetV3SearchImagesEditorialQueryParams withOrientations(openapisdk.models.shared.OrientationRequestEnum[] orientations) {
        this.orientations = orientations;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetV3SearchImagesEditorialQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Integer pageSize;
    public GetV3SearchImagesEditorialQueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=phrase")
    public String phrase;
    public GetV3SearchImagesEditorialQueryParams withPhrase(String phrase) {
        this.phrase = phrase;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_order")
    public openapisdk.models.shared.SortOrderEnum sortOrder;
    public GetV3SearchImagesEditorialQueryParams withSortOrder(openapisdk.models.shared.SortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=specific_people")
    public String[] specificPeople;
    public GetV3SearchImagesEditorialQueryParams withSpecificPeople(String[] specificPeople) {
        this.specificPeople = specificPeople;
        return this;
    }
}