package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeploymentInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListDeploymentInstancesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}