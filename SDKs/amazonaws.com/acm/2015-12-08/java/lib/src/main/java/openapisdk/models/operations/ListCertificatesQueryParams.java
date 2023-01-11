package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCertificatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public ListCertificatesQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListCertificatesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}