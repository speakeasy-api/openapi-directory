package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public GetApiPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}