package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskTemplatesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=assignee_group")
    public Long assigneeGroup;
    public TaskTemplatesListQueryParams withAssigneeGroup(Long assigneeGroup) {
        this.assigneeGroup = assigneeGroup;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=assignee_user")
    public Long assigneeUser;
    public TaskTemplatesListQueryParams withAssigneeUser(Long assigneeUser) {
        this.assigneeUser = assigneeUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public Long category;
    public TaskTemplatesListQueryParams withCategory(Long category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public TaskTemplatesListQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public TaskTemplatesListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public TaskTemplatesListQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public Long status;
    public TaskTemplatesListQueryParams withStatus(Long status) {
        this.status = status;
        return this;
    }
}