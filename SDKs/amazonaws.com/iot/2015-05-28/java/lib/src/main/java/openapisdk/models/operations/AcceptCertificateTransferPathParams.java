package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcceptCertificateTransferPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public AcceptCertificateTransferPathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
}