package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReimportApiPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public ReimportApiPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}