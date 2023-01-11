package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTypesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public ListTypesPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}