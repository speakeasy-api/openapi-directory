package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteHsmClientCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteHsmClientCertificateActionEnum action;
    public GetDeleteHsmClientCertificateQueryParams withAction(GetDeleteHsmClientCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HsmClientCertificateIdentifier")
    public String hsmClientCertificateIdentifier;
    public GetDeleteHsmClientCertificateQueryParams withHsmClientCertificateIdentifier(String hsmClientCertificateIdentifier) {
        this.hsmClientCertificateIdentifier = hsmClientCertificateIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteHsmClientCertificateVersionEnum version;
    public GetDeleteHsmClientCertificateQueryParams withVersion(GetDeleteHsmClientCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
}