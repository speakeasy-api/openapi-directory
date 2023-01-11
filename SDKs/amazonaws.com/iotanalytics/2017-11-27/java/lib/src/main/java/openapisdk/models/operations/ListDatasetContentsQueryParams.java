package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListDatasetContentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListDatasetContentsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListDatasetContentsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=scheduledBefore")
    public OffsetDateTime scheduledBefore;
    public ListDatasetContentsQueryParams withScheduledBefore(OffsetDateTime scheduledBefore) {
        this.scheduledBefore = scheduledBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=scheduledOnOrAfter")
    public OffsetDateTime scheduledOnOrAfter;
    public ListDatasetContentsQueryParams withScheduledOnOrAfter(OffsetDateTime scheduledOnOrAfter) {
        this.scheduledOnOrAfter = scheduledOnOrAfter;
        return this;
    }
}