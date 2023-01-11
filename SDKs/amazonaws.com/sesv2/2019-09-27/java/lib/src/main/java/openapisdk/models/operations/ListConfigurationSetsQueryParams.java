package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConfigurationSetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public ListConfigurationSetsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListConfigurationSetsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}