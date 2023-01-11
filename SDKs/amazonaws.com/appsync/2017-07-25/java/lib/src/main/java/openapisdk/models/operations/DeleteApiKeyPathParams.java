package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteApiKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public DeleteApiKeyPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteApiKeyPathParams withId(String id) {
        this.id = id;
        return this;
    }
}