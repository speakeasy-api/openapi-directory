package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListJobsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=completed")
    public String completed;
    public ListJobsQueryParams withCompleted(String completed) {
        this.completed = completed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public ListJobsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=marker")
    public String marker;
    public ListJobsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=statuscode")
    public String statuscode;
    public ListJobsQueryParams withStatuscode(String statuscode) {
        this.statuscode = statuscode;
        return this;
    }
}