package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListHumanLoopsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CreationTimeAfter")
    public OffsetDateTime creationTimeAfter;
    public ListHumanLoopsQueryParams withCreationTimeAfter(OffsetDateTime creationTimeAfter) {
        this.creationTimeAfter = creationTimeAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CreationTimeBefore")
    public OffsetDateTime creationTimeBefore;
    public ListHumanLoopsQueryParams withCreationTimeBefore(OffsetDateTime creationTimeBefore) {
        this.creationTimeBefore = creationTimeBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FlowDefinitionArn")
    public String flowDefinitionArn;
    public ListHumanLoopsQueryParams withFlowDefinitionArn(String flowDefinitionArn) {
        this.flowDefinitionArn = flowDefinitionArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public ListHumanLoopsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListHumanLoopsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SortOrder")
    public ListHumanLoopsSortOrderEnum sortOrder;
    public ListHumanLoopsQueryParams withSortOrder(ListHumanLoopsSortOrderEnum sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}