package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCaCertificatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=caCertificateId")
    public String caCertificateId;
    public DescribeCaCertificatePathParams withCaCertificateId(String caCertificateId) {
        this.caCertificateId = caCertificateId;
        return this;
    }
}