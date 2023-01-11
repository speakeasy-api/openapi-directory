package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUploadServerCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUploadServerCertificateActionEnum action;
    public PostUploadServerCertificateQueryParams withAction(PostUploadServerCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUploadServerCertificateVersionEnum version;
    public PostUploadServerCertificateQueryParams withVersion(PostUploadServerCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
}