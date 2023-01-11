package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCaCertificatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=caCertificateId")
    public String caCertificateId;
    public UpdateCaCertificatePathParams withCaCertificateId(String caCertificateId) {
        this.caCertificateId = caCertificateId;
        return this;
    }
}