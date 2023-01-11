package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGraphqlApiPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public GetGraphqlApiPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}