package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public SendDocumentPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}