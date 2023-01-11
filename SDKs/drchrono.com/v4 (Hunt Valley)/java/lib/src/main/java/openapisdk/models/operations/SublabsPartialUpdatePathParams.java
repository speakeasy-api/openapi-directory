package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SublabsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public SublabsPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}