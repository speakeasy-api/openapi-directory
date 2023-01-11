package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEulaAcceptancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=eulaIds")
    public String[] eulaIds;
    public ListEulaAcceptancesQueryParams withEulaIds(String[] eulaIds) {
        this.eulaIds = eulaIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListEulaAcceptancesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}