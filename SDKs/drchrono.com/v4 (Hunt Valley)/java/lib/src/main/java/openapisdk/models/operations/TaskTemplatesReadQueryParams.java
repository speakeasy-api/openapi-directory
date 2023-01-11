package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TaskTemplatesReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=assignee_group")
    public Long assigneeGroup;
    public TaskTemplatesReadQueryParams withAssigneeGroup(Long assigneeGroup) {
        this.assigneeGroup = assigneeGroup;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=assignee_user")
    public Long assigneeUser;
    public TaskTemplatesReadQueryParams withAssigneeUser(Long assigneeUser) {
        this.assigneeUser = assigneeUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public Long category;
    public TaskTemplatesReadQueryParams withCategory(Long category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public TaskTemplatesReadQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public Long status;
    public TaskTemplatesReadQueryParams withStatus(Long status) {
        this.status = status;
        return this;
    }
}