package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProductPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetProductPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}