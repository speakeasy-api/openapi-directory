package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFunctionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public ListFunctionsPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}