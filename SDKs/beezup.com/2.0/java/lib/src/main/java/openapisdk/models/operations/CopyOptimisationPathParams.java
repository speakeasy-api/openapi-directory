package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CopyOptimisationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public CopyOptimisationPathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}