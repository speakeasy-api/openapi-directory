package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAuthorizersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public GetAuthorizersPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}