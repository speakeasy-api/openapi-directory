package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBackendEnvironmentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=environmentName")
    public String environmentName;
    public ListBackendEnvironmentsQueryParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListBackendEnvironmentsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListBackendEnvironmentsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}