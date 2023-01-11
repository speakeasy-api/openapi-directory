package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCorsConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public DeleteCorsConfigurationPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}