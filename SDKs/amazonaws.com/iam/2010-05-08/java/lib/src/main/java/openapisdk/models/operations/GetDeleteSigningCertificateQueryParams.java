package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteSigningCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteSigningCertificateActionEnum action;
    public GetDeleteSigningCertificateQueryParams withAction(GetDeleteSigningCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CertificateId")
    public String certificateId;
    public GetDeleteSigningCertificateQueryParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetDeleteSigningCertificateQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteSigningCertificateVersionEnum version;
    public GetDeleteSigningCertificateQueryParams withVersion(GetDeleteSigningCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
}