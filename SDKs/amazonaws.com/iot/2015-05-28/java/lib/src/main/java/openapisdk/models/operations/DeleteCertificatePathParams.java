package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCertificatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public DeleteCertificatePathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
}