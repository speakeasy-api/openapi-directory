package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SublabsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public SublabsDeletePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}