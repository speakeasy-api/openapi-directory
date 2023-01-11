package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListOfferingTransactionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListOfferingTransactionsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}