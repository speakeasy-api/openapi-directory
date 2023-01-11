package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCaCertificatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=caCertificateId")
    public String caCertificateId;
    public DeleteCaCertificatePathParams withCaCertificateId(String caCertificateId) {
        this.caCertificateId = caCertificateId;
        return this;
    }
}