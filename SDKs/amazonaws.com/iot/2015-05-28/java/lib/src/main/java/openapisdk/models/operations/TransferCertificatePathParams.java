package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransferCertificatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public TransferCertificatePathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
}