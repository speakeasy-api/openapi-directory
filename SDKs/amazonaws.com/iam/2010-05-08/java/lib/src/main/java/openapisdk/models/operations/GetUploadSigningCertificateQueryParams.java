package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUploadSigningCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUploadSigningCertificateActionEnum action;
    public GetUploadSigningCertificateQueryParams withAction(GetUploadSigningCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CertificateBody")
    public String certificateBody;
    public GetUploadSigningCertificateQueryParams withCertificateBody(String certificateBody) {
        this.certificateBody = certificateBody;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetUploadSigningCertificateQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUploadSigningCertificateVersionEnum version;
    public GetUploadSigningCertificateQueryParams withVersion(GetUploadSigningCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
}