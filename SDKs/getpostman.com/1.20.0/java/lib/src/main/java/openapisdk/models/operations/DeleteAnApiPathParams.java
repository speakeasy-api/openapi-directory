package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAnApiPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public DeleteAnApiPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}