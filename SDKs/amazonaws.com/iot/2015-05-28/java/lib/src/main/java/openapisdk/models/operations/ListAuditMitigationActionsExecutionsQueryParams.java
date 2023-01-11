package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAuditMitigationActionsExecutionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=actionStatus")
    public ListAuditMitigationActionsExecutionsActionStatusEnum actionStatus;
    public ListAuditMitigationActionsExecutionsQueryParams withActionStatus(ListAuditMitigationActionsExecutionsActionStatusEnum actionStatus) {
        this.actionStatus = actionStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=findingId")
    public String findingId;
    public ListAuditMitigationActionsExecutionsQueryParams withFindingId(String findingId) {
        this.findingId = findingId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListAuditMitigationActionsExecutionsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListAuditMitigationActionsExecutionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=taskId")
    public String taskId;
    public ListAuditMitigationActionsExecutionsQueryParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}