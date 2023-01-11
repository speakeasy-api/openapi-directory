package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTypesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public ListTypesFormatEnum format;
    public ListTypesQueryParams withFormat(ListTypesFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListTypesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListTypesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}