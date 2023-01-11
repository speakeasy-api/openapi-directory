package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListApiKeysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public ListApiKeysPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}