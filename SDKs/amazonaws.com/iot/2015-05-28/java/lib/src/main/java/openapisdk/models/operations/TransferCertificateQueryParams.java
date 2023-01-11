package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransferCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=targetAwsAccount")
    public String targetAwsAccount;
    public TransferCertificateQueryParams withTargetAwsAccount(String targetAwsAccount) {
        this.targetAwsAccount = targetAwsAccount;
        return this;
    }
}