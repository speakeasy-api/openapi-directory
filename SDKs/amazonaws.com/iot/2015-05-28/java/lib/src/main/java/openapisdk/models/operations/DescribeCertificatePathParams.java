package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCertificatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificateId")
    public String certificateId;
    public DescribeCertificatePathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
}