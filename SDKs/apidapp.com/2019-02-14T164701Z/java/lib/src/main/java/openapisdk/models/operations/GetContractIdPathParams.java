package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContractIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetContractIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}