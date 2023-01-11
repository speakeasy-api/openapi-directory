package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SublabsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public SublabsReadPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}