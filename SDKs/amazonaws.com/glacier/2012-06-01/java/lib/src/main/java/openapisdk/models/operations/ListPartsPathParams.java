package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPartsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public ListPartsPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uploadId")
    public String uploadId;
    public ListPartsPathParams withUploadId(String uploadId) {
        this.uploadId = uploadId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vaultName")
    public String vaultName;
    public ListPartsPathParams withVaultName(String vaultName) {
        this.vaultName = vaultName;
        return this;
    }
}