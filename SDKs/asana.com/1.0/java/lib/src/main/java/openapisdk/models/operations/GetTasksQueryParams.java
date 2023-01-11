package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetTasksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=assignee")
    public String assignee;
    public GetTasksQueryParams withAssignee(String assignee) {
        this.assignee = assignee;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=completed_since")
    public OffsetDateTime completedSince;
    public GetTasksQueryParams withCompletedSince(OffsetDateTime completedSince) {
        this.completedSince = completedSince;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetTasksQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modified_since")
    public OffsetDateTime modifiedSince;
    public GetTasksQueryParams withModifiedSince(OffsetDateTime modifiedSince) {
        this.modifiedSince = modifiedSince;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetTasksQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=opt_fields")
    public String[] optFields;
    public GetTasksQueryParams withOptFields(String[] optFields) {
        this.optFields = optFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=opt_pretty")
    public Boolean optPretty;
    public GetTasksQueryParams withOptPretty(Boolean optPretty) {
        this.optPretty = optPretty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=project")
    public String project;
    public GetTasksQueryParams withProject(String project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=section")
    public String section;
    public GetTasksQueryParams withSection(String section) {
        this.section = section;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=workspace")
    public String workspace;
    public GetTasksQueryParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}