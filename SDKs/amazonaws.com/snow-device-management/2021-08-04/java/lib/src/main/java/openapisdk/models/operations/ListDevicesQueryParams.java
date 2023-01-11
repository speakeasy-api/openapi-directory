package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDevicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jobId")
    public String jobId;
    public ListDevicesQueryParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListDevicesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListDevicesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}