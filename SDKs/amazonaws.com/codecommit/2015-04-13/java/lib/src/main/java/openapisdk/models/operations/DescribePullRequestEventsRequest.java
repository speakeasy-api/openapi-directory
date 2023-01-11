package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribePullRequestEventsRequest {
    public DescribePullRequestEventsQueryParams queryParams;
    public DescribePullRequestEventsRequest withQueryParams(DescribePullRequestEventsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribePullRequestEventsHeaders headers;
    public DescribePullRequestEventsRequest withHeaders(DescribePullRequestEventsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribePullRequestEventsInput request;
    public DescribePullRequestEventsRequest withRequest(openapisdk.models.shared.DescribePullRequestEventsInput request) {
        this.request = request;
        return this;
    }
}