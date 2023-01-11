package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAnalyzersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListAnalyzersQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListAnalyzersQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public ListAnalyzersTypeEnum type;
    public ListAnalyzersQueryParams withType(ListAnalyzersTypeEnum type) {
        this.type = type;
        return this;
    }
}