package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRecordsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lastSyncCount")
    public Long lastSyncCount;
    public ListRecordsQueryParams withLastSyncCount(Long lastSyncCount) {
        this.lastSyncCount = lastSyncCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListRecordsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListRecordsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=syncSessionToken")
    public String syncSessionToken;
    public ListRecordsQueryParams withSyncSessionToken(String syncSessionToken) {
        this.syncSessionToken = syncSessionToken;
        return this;
    }
}