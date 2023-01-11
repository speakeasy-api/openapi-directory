package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchTypeBlsSeriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchTypeBlsSeriesQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchTypeBlsSeriesQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchTypeBlsSeriesQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchTypeBlsSeriesQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchTypeBlsSeriesQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchTypeBlsSeriesQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchTypeBlsSeriesQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchTypeBlsSeriesQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchTypeBlsSeriesQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchTypeBlsSeriesQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchTypeBlsSeriesQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchTypeBlsSeriesQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchTypeBlsSeriesQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchTypeBlsSeriesQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_bls_series.area")
    public String searchTypeBlsSeriesArea;
    public SearchTypeBlsSeriesQueryParams withSearchTypeBlsSeriesArea(String searchTypeBlsSeriesArea) {
        this.searchTypeBlsSeriesArea = searchTypeBlsSeriesArea;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_bls_series.industry")
    public String searchTypeBlsSeriesIndustry;
    public SearchTypeBlsSeriesQueryParams withSearchTypeBlsSeriesIndustry(String searchTypeBlsSeriesIndustry) {
        this.searchTypeBlsSeriesIndustry = searchTypeBlsSeriesIndustry;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_bls_series.item")
    public String searchTypeBlsSeriesItem;
    public SearchTypeBlsSeriesQueryParams withSearchTypeBlsSeriesItem(String searchTypeBlsSeriesItem) {
        this.searchTypeBlsSeriesItem = searchTypeBlsSeriesItem;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_bls_series.measure_data_type")
    public String searchTypeBlsSeriesMeasureDataType;
    public SearchTypeBlsSeriesQueryParams withSearchTypeBlsSeriesMeasureDataType(String searchTypeBlsSeriesMeasureDataType) {
        this.searchTypeBlsSeriesMeasureDataType = searchTypeBlsSeriesMeasureDataType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_bls_series.seasonality")
    public String searchTypeBlsSeriesSeasonality;
    public SearchTypeBlsSeriesQueryParams withSearchTypeBlsSeriesSeasonality(String searchTypeBlsSeriesSeasonality) {
        this.searchTypeBlsSeriesSeasonality = searchTypeBlsSeriesSeasonality;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_bls_series.sector")
    public String searchTypeBlsSeriesSector;
    public SearchTypeBlsSeriesQueryParams withSearchTypeBlsSeriesSector(String searchTypeBlsSeriesSector) {
        this.searchTypeBlsSeriesSector = searchTypeBlsSeriesSector;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_bls_series.survey_name")
    public String searchTypeBlsSeriesSurveyName;
    public SearchTypeBlsSeriesQueryParams withSearchTypeBlsSeriesSurveyName(String searchTypeBlsSeriesSurveyName) {
        this.searchTypeBlsSeriesSurveyName = searchTypeBlsSeriesSurveyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchTypeBlsSeriesQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchTypeBlsSeriesQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchTypeBlsSeriesQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}