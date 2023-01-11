package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPublicUrlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetPublicUrlPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}