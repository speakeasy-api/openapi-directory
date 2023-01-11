package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListJobExecutionsForThingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListJobExecutionsForThingQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=namespaceId")
    public String namespaceId;
    public ListJobExecutionsForThingQueryParams withNamespaceId(String namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListJobExecutionsForThingQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public ListJobExecutionsForThingStatusEnum status;
    public ListJobExecutionsForThingQueryParams withStatus(ListJobExecutionsForThingStatusEnum status) {
        this.status = status;
        return this;
    }
}