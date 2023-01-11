package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCertificatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public UpdateCertificatePathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
}