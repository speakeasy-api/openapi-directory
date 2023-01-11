package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateSigningCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateSigningCertificateActionEnum action;
    public GetUpdateSigningCertificateQueryParams withAction(GetUpdateSigningCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CertificateId")
    public String certificateId;
    public GetUpdateSigningCertificateQueryParams withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public GetUpdateSigningCertificateStatusEnum status;
    public GetUpdateSigningCertificateQueryParams withStatus(GetUpdateSigningCertificateStatusEnum status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetUpdateSigningCertificateQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateSigningCertificateVersionEnum version;
    public GetUpdateSigningCertificateQueryParams withVersion(GetUpdateSigningCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
}