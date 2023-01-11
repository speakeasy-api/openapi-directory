package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBlockchainIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetBlockchainIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}