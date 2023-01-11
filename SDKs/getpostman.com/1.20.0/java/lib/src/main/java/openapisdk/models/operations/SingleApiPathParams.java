package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SingleApiPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public SingleApiPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}