package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListDetectMitigationActionsExecutionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endTime")
    public OffsetDateTime endTime;
    public ListDetectMitigationActionsExecutionsQueryParams withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListDetectMitigationActionsExecutionsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListDetectMitigationActionsExecutionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startTime")
    public OffsetDateTime startTime;
    public ListDetectMitigationActionsExecutionsQueryParams withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=taskId")
    public String taskId;
    public ListDetectMitigationActionsExecutionsQueryParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=thingName")
    public String thingName;
    public ListDetectMitigationActionsExecutionsQueryParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=violationId")
    public String violationId;
    public ListDetectMitigationActionsExecutionsQueryParams withViolationId(String violationId) {
        this.violationId = violationId;
        return this;
    }
}