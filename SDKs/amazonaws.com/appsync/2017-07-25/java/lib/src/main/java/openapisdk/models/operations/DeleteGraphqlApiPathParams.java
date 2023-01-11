package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGraphqlApiPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public DeleteGraphqlApiPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}