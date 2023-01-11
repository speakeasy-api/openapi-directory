package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeploymentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public GetDeploymentsPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}