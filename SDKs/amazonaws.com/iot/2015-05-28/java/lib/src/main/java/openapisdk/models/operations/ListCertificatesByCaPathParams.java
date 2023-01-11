package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListCertificatesByCaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=caCertificateId")
    public String caCertificateId;
    public ListCertificatesByCaPathParams withCaCertificateId(String caCertificateId) {
        this.caCertificateId = caCertificateId;
        return this;
    }
}