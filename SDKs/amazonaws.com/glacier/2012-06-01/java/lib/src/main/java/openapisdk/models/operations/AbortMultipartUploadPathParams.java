package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AbortMultipartUploadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public AbortMultipartUploadPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uploadId")
    public String uploadId;
    public AbortMultipartUploadPathParams withUploadId(String uploadId) {
        this.uploadId = uploadId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vaultName")
    public String vaultName;
    public AbortMultipartUploadPathParams withVaultName(String vaultName) {
        this.vaultName = vaultName;
        return this;
    }
}