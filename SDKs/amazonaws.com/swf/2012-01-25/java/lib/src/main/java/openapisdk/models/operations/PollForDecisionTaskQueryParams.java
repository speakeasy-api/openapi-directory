package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PollForDecisionTaskQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maximumPageSize")
    public String maximumPageSize;
    public PollForDecisionTaskQueryParams withMaximumPageSize(String maximumPageSize) {
        this.maximumPageSize = maximumPageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextPageToken")
    public String nextPageToken;
    public PollForDecisionTaskQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}