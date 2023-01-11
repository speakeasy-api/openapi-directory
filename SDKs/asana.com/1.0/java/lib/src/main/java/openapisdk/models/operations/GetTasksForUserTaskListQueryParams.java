package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTasksForUserTaskListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=completed_since")
    public String completedSince;
    public GetTasksForUserTaskListQueryParams withCompletedSince(String completedSince) {
        this.completedSince = completedSince;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetTasksForUserTaskListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetTasksForUserTaskListQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=opt_fields")
    public String[] optFields;
    public GetTasksForUserTaskListQueryParams withOptFields(String[] optFields) {
        this.optFields = optFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=opt_pretty")
    public Boolean optPretty;
    public GetTasksForUserTaskListQueryParams withOptPretty(Boolean optPretty) {
        this.optPretty = optPretty;
        return this;
    }
}