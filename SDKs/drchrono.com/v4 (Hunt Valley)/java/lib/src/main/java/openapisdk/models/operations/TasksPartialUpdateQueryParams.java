package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TasksPartialUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=assignee_group")
    public Long assigneeGroup;
    public TasksPartialUpdateQueryParams withAssigneeGroup(Long assigneeGroup) {
        this.assigneeGroup = assigneeGroup;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=assignee_user")
    public Long assigneeUser;
    public TasksPartialUpdateQueryParams withAssigneeUser(Long assigneeUser) {
        this.assigneeUser = assigneeUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public Long category;
    public TasksPartialUpdateQueryParams withCategory(Long category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=due_at_date")
    public String dueAtDate;
    public TasksPartialUpdateQueryParams withDueAtDate(String dueAtDate) {
        this.dueAtDate = dueAtDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=due_at_range")
    public String dueAtRange;
    public TasksPartialUpdateQueryParams withDueAtRange(String dueAtRange) {
        this.dueAtRange = dueAtRange;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=due_at_since")
    public String dueAtSince;
    public TasksPartialUpdateQueryParams withDueAtSince(String dueAtSince) {
        this.dueAtSince = dueAtSince;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=due_at_unknown")
    public String dueAtUnknown;
    public TasksPartialUpdateQueryParams withDueAtUnknown(String dueAtUnknown) {
        this.dueAtUnknown = dueAtUnknown;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public TasksPartialUpdateQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public Long status;
    public TasksPartialUpdateQueryParams withStatus(Long status) {
        this.status = status;
        return this;
    }
}