package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCertificatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=certificate_id")
    public String certificateId;
    public GetCertificatePathParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
}