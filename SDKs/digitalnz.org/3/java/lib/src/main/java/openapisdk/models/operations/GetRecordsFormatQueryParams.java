package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRecordsFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=and[category][]")
    public openapisdk.models.shared.ApiKeyEnum andCategory;
    public GetRecordsFormatQueryParams withAndCategory(openapisdk.models.shared.ApiKeyEnum andCategory) {
        this.andCategory = andCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=and[century]")
    public String andCentury;
    public GetRecordsFormatQueryParams withAndCentury(String andCentury) {
        this.andCentury = andCentury;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=and[collection][]")
    public String andCollection;
    public GetRecordsFormatQueryParams withAndCollection(String andCollection) {
        this.andCollection = andCollection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=and[content_partner][]")
    public String andContentPartner;
    public GetRecordsFormatQueryParams withAndContentPartner(String andContentPartner) {
        this.andContentPartner = andContentPartner;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=and[creator][]")
    public String andCreator;
    public GetRecordsFormatQueryParams withAndCreator(String andCreator) {
        this.andCreator = andCreator;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=and[date]")
    public String andDate;
    public GetRecordsFormatQueryParams withAndDate(String andDate) {
        this.andDate = andDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=and[dc_type][]")
    public String andDcType;
    public GetRecordsFormatQueryParams withAndDcType(String andDcType) {
        this.andDcType = andDcType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=and[decade]")
    public String andDecade;
    public GetRecordsFormatQueryParams withAndDecade(String andDecade) {
        this.andDecade = andDecade;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=and[format][]")
    public String andFormat;
    public GetRecordsFormatQueryParams withAndFormat(String andFormat) {
        this.andFormat = andFormat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=and[has_large_thumbnail_url]")
    public openapisdk.models.shared.ApiKeyEnum2 andHasLargeThumbnailUrl;
    public GetRecordsFormatQueryParams withAndHasLargeThumbnailUrl(openapisdk.models.shared.ApiKeyEnum2 andHasLargeThumbnailUrl) {
        this.andHasLargeThumbnailUrl = andHasLargeThumbnailUrl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=and[has_lat_lng]")
    public Boolean andHasLatLng;
    public GetRecordsFormatQueryParams withAndHasLatLng(Boolean andHasLatLng) {
        this.andHasLatLng = andHasLatLng;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=and[is_commercial_use]")
    public Boolean andIsCommercialUse;
    public GetRecordsFormatQueryParams withAndIsCommercialUse(Boolean andIsCommercialUse) {
        this.andIsCommercialUse = andIsCommercialUse;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=and[or][{filter_field}][]")
    public String andOrFilterField;
    public GetRecordsFormatQueryParams withAndOrFilterField(String andOrFilterField) {
        this.andOrFilterField = andOrFilterField;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=and[placename][]")
    public String andPlacename;
    public GetRecordsFormatQueryParams withAndPlacename(String andPlacename) {
        this.andPlacename = andPlacename;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=and[primary_collection][]")
    public String andPrimaryCollection;
    public GetRecordsFormatQueryParams withAndPrimaryCollection(String andPrimaryCollection) {
        this.andPrimaryCollection = andPrimaryCollection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=and[subject][]")
    public String andSubject;
    public GetRecordsFormatQueryParams withAndSubject(String andSubject) {
        this.andSubject = andSubject;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=and[title][]")
    public String andTitle;
    public GetRecordsFormatQueryParams withAndTitle(String andTitle) {
        this.andTitle = andTitle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=and[usage][]")
    public openapisdk.models.shared.ApiKeyEnum1 andUsage;
    public GetRecordsFormatQueryParams withAndUsage(openapisdk.models.shared.ApiKeyEnum1 andUsage) {
        this.andUsage = andUsage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=and[year]")
    public String andYear;
    public GetRecordsFormatQueryParams withAndYear(String andYear) {
        this.andYear = andYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetRecordsFormatQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.FieldsEnum1 direction;
    public GetRecordsFormatQueryParams withDirection(openapisdk.models.shared.FieldsEnum1 direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_filters_from_facets")
    public Boolean excludeFiltersFromFacets;
    public GetRecordsFormatQueryParams withExcludeFiltersFromFacets(Boolean excludeFiltersFromFacets) {
        this.excludeFiltersFromFacets = excludeFiltersFromFacets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=facets")
    public openapisdk.models.shared.FieldsEnum2[] facets;
    public GetRecordsFormatQueryParams withFacets(openapisdk.models.shared.FieldsEnum2[] facets) {
        this.facets = facets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facets_page")
    public Long facetsPage;
    public GetRecordsFormatQueryParams withFacetsPage(Long facetsPage) {
        this.facetsPage = facetsPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facets_per_page")
    public Long facetsPerPage;
    public GetRecordsFormatQueryParams withFacetsPerPage(Long facetsPerPage) {
        this.facetsPerPage = facetsPerPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=fields")
    public String fields;
    public GetRecordsFormatQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=geo_bbox")
    public String geoBbox;
    public GetRecordsFormatQueryParams withGeoBbox(String geoBbox) {
        this.geoBbox = geoBbox;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetRecordsFormatQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetRecordsFormatQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public openapisdk.models.shared.FieldsEnum sort;
    public GetRecordsFormatQueryParams withSort(openapisdk.models.shared.FieldsEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public GetRecordsFormatQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=without[{filter_field}]")
    public String withoutFilterField;
    public GetRecordsFormatQueryParams withWithoutFilterField(String withoutFilterField) {
        this.withoutFilterField = withoutFilterField;
        return this;
    }
}