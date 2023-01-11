package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOnlineSzamlaStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetOnlineSzamlaStatusPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}