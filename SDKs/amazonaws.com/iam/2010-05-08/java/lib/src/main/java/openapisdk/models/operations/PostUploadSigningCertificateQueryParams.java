package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUploadSigningCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUploadSigningCertificateActionEnum action;
    public PostUploadSigningCertificateQueryParams withAction(PostUploadSigningCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUploadSigningCertificateVersionEnum version;
    public PostUploadSigningCertificateQueryParams withVersion(PostUploadSigningCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
}