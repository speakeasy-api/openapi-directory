package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProductPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public UpdateProductPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}