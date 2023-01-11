package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompleteDirectSendPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public CompleteDirectSendPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}