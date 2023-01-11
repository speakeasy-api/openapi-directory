package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchTasksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchTasksQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchTasksQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchTasksQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchTasksQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchTasksQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchTasksQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchTasksQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchTasksQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchTasksQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchTasksQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchTasksQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchTasksQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchTasksQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchTasksQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tasks.assignedto")
    public String searchDbTasksAssignedto;
    public SearchTasksQueryParams withSearchDbTasksAssignedto(String searchDbTasksAssignedto) {
        this.searchDbTasksAssignedto = searchDbTasksAssignedto;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tasks.complete")
    public Double searchDbTasksComplete;
    public SearchTasksQueryParams withSearchDbTasksComplete(Double searchDbTasksComplete) {
        this.searchDbTasksComplete = searchDbTasksComplete;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tasks.enddate")
    public String searchDbTasksEnddate;
    public SearchTasksQueryParams withSearchDbTasksEnddate(String searchDbTasksEnddate) {
        this.searchDbTasksEnddate = searchDbTasksEnddate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tasks.priority")
    public String searchDbTasksPriority;
    public SearchTasksQueryParams withSearchDbTasksPriority(String searchDbTasksPriority) {
        this.searchDbTasksPriority = searchDbTasksPriority;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tasks.startdate")
    public String searchDbTasksStartdate;
    public SearchTasksQueryParams withSearchDbTasksStartdate(String searchDbTasksStartdate) {
        this.searchDbTasksStartdate = searchDbTasksStartdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tasks.status")
    public String searchDbTasksStatus;
    public SearchTasksQueryParams withSearchDbTasksStatus(String searchDbTasksStatus) {
        this.searchDbTasksStatus = searchDbTasksStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_tasks.title")
    public String searchDbTasksTitle;
    public SearchTasksQueryParams withSearchDbTasksTitle(String searchDbTasksTitle) {
        this.searchDbTasksTitle = searchDbTasksTitle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchTasksQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchTasksQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchTasksQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}