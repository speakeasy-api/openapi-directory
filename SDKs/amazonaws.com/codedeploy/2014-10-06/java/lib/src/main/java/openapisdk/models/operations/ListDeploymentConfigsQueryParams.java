package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeploymentConfigsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListDeploymentConfigsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}