package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListAuditTasksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endTime")
    public OffsetDateTime endTime;
    public ListAuditTasksQueryParams withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListAuditTasksQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListAuditTasksQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startTime")
    public OffsetDateTime startTime;
    public ListAuditTasksQueryParams withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=taskStatus")
    public ListAuditTasksTaskStatusEnum taskStatus;
    public ListAuditTasksQueryParams withTaskStatus(ListAuditTasksTaskStatusEnum taskStatus) {
        this.taskStatus = taskStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=taskType")
    public ListAuditTasksTaskTypeEnum taskType;
    public ListAuditTasksQueryParams withTaskType(ListAuditTasksTaskTypeEnum taskType) {
        this.taskType = taskType;
        return this;
    }
}