package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListAuditMitigationActionsTasksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=auditTaskId")
    public String auditTaskId;
    public ListAuditMitigationActionsTasksQueryParams withAuditTaskId(String auditTaskId) {
        this.auditTaskId = auditTaskId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endTime")
    public OffsetDateTime endTime;
    public ListAuditMitigationActionsTasksQueryParams withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=findingId")
    public String findingId;
    public ListAuditMitigationActionsTasksQueryParams withFindingId(String findingId) {
        this.findingId = findingId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListAuditMitigationActionsTasksQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListAuditMitigationActionsTasksQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startTime")
    public OffsetDateTime startTime;
    public ListAuditMitigationActionsTasksQueryParams withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=taskStatus")
    public ListAuditMitigationActionsTasksTaskStatusEnum taskStatus;
    public ListAuditMitigationActionsTasksQueryParams withTaskStatus(ListAuditMitigationActionsTasksTaskStatusEnum taskStatus) {
        this.taskStatus = taskStatus;
        return this;
    }
}