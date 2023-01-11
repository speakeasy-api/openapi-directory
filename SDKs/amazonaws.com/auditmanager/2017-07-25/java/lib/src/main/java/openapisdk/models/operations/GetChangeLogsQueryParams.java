package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChangeLogsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=controlId")
    public String controlId;
    public GetChangeLogsQueryParams withControlId(String controlId) {
        this.controlId = controlId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=controlSetId")
    public String controlSetId;
    public GetChangeLogsQueryParams withControlSetId(String controlSetId) {
        this.controlSetId = controlSetId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public GetChangeLogsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public GetChangeLogsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}