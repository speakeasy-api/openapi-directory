package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListJobsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListJobsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=namespaceId")
    public String namespaceId;
    public ListJobsQueryParams withNamespaceId(String namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListJobsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public ListJobsStatusEnum status;
    public ListJobsQueryParams withStatus(ListJobsStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=targetSelection")
    public ListJobsTargetSelectionEnum targetSelection;
    public ListJobsQueryParams withTargetSelection(ListJobsTargetSelectionEnum targetSelection) {
        this.targetSelection = targetSelection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=thingGroupId")
    public String thingGroupId;
    public ListJobsQueryParams withThingGroupId(String thingGroupId) {
        this.thingGroupId = thingGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=thingGroupName")
    public String thingGroupName;
    public ListJobsQueryParams withThingGroupName(String thingGroupName) {
        this.thingGroupName = thingGroupName;
        return this;
    }
}