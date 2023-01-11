package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTransferInstrumentsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteTransferInstrumentsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}