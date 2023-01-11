package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourceOwnerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceOwnerId")
    public String resourceOwnerId;
    public GetResourceOwnerPathParams withResourceOwnerId(String resourceOwnerId) {
        this.resourceOwnerId = resourceOwnerId;
        return this;
    }
}