package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionHashReceiptPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=hash")
    public String hash;
    public GetTransactionHashReceiptPathParams withHash(String hash) {
        this.hash = hash;
        return this;
    }
}