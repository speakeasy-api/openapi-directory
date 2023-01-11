package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAccessPreviewsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=analyzerArn")
    public String analyzerArn;
    public ListAccessPreviewsQueryParams withAnalyzerArn(String analyzerArn) {
        this.analyzerArn = analyzerArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListAccessPreviewsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListAccessPreviewsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}