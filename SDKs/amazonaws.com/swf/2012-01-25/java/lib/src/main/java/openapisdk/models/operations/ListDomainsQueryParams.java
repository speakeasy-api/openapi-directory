package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDomainsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maximumPageSize")
    public String maximumPageSize;
    public ListDomainsQueryParams withMaximumPageSize(String maximumPageSize) {
        this.maximumPageSize = maximumPageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextPageToken")
    public String nextPageToken;
    public ListDomainsQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}