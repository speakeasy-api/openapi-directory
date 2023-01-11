package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListStudioComponentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListStudioComponentsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListStudioComponentsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=states")
    public String[] states;
    public ListStudioComponentsQueryParams withStates(String[] states) {
        this.states = states;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=types")
    public String[] types;
    public ListStudioComponentsQueryParams withTypes(String[] types) {
        this.types = types;
        return this;
    }
}