package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRoutesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public GetRoutesPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}