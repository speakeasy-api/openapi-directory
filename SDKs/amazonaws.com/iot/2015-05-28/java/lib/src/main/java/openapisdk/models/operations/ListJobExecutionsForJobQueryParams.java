package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListJobExecutionsForJobQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListJobExecutionsForJobQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListJobExecutionsForJobQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=status")
    public ListJobExecutionsForJobStatusEnum status;
    public ListJobExecutionsForJobQueryParams withStatus(ListJobExecutionsForJobStatusEnum status) {
        this.status = status;
        return this;
    }
}