package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public Double userId;
    public GetUserPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}