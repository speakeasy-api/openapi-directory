package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJobOutputPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accountId")
    public String accountId;
    public GetJobOutputPathParams withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jobId")
    public String jobId;
    public GetJobOutputPathParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=vaultName")
    public String vaultName;
    public GetJobOutputPathParams withVaultName(String vaultName) {
        this.vaultName = vaultName;
        return this;
    }
}