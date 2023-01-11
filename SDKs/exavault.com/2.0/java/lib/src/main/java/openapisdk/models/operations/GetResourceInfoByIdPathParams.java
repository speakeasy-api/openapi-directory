package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourceInfoByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetResourceInfoByIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}