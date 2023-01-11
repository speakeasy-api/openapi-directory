package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SublabsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public SublabsUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}