package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListControlsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=controlType")
    public ListControlsControlTypeEnum controlType;
    public ListControlsQueryParams withControlType(ListControlsControlTypeEnum controlType) {
        this.controlType = controlType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListControlsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListControlsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}