package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDomainControllersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Limit")
    public String limit;
    public DescribeDomainControllersQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public DescribeDomainControllersQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}