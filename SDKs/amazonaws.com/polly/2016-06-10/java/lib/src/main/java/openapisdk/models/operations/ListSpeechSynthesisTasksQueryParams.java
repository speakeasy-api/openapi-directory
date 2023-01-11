package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSpeechSynthesisTasksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxResults")
    public Long maxResults;
    public ListSpeechSynthesisTasksQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListSpeechSynthesisTasksQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public ListSpeechSynthesisTasksStatusEnum status;
    public ListSpeechSynthesisTasksQueryParams withStatus(ListSpeechSynthesisTasksStatusEnum status) {
        this.status = status;
        return this;
    }
}