package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBlockIdTransactionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetBlockIdTransactionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}