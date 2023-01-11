package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransferPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=transfer_Id")
    public String transferId;
    public GetTransferPathParams withTransferId(String transferId) {
        this.transferId = transferId;
        return this;
    }
}