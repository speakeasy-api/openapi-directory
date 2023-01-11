package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListJobsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListJobsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}