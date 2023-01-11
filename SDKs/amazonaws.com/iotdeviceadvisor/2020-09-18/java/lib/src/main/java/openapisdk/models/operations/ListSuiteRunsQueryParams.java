package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSuiteRunsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListSuiteRunsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListSuiteRunsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=suiteDefinitionId")
    public String suiteDefinitionId;
    public ListSuiteRunsQueryParams withSuiteDefinitionId(String suiteDefinitionId) {
        this.suiteDefinitionId = suiteDefinitionId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=suiteDefinitionVersion")
    public String suiteDefinitionVersion;
    public ListSuiteRunsQueryParams withSuiteDefinitionVersion(String suiteDefinitionVersion) {
        this.suiteDefinitionVersion = suiteDefinitionVersion;
        return this;
    }
}