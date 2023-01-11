package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkflowExecutionHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maximumPageSize")
    public String maximumPageSize;
    public GetWorkflowExecutionHistoryQueryParams withMaximumPageSize(String maximumPageSize) {
        this.maximumPageSize = maximumPageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextPageToken")
    public String nextPageToken;
    public GetWorkflowExecutionHistoryQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}