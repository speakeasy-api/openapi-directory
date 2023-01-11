package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public CancelDocumentPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}