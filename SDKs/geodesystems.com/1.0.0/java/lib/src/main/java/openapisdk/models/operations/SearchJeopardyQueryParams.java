package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchJeopardyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchJeopardyQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchJeopardyQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchJeopardyQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchJeopardyQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchJeopardyQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchJeopardyQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchJeopardyQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchJeopardyQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchJeopardyQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchJeopardyQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchJeopardyQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchJeopardyQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchJeopardyQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchJeopardyQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_jeopardy.air_date")
    public String searchDbJeopardyAirDate;
    public SearchJeopardyQueryParams withSearchDbJeopardyAirDate(String searchDbJeopardyAirDate) {
        this.searchDbJeopardyAirDate = searchDbJeopardyAirDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_jeopardy.answer")
    public String searchDbJeopardyAnswer;
    public SearchJeopardyQueryParams withSearchDbJeopardyAnswer(String searchDbJeopardyAnswer) {
        this.searchDbJeopardyAnswer = searchDbJeopardyAnswer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_jeopardy.category")
    public String searchDbJeopardyCategory;
    public SearchJeopardyQueryParams withSearchDbJeopardyCategory(String searchDbJeopardyCategory) {
        this.searchDbJeopardyCategory = searchDbJeopardyCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_jeopardy.question")
    public String searchDbJeopardyQuestion;
    public SearchJeopardyQueryParams withSearchDbJeopardyQuestion(String searchDbJeopardyQuestion) {
        this.searchDbJeopardyQuestion = searchDbJeopardyQuestion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_jeopardy.round")
    public String searchDbJeopardyRound;
    public SearchJeopardyQueryParams withSearchDbJeopardyRound(String searchDbJeopardyRound) {
        this.searchDbJeopardyRound = searchDbJeopardyRound;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchJeopardyQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchJeopardyQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchJeopardyQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}