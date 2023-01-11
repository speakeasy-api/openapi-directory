package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateHsmClientCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateHsmClientCertificateActionEnum action;
    public PostCreateHsmClientCertificateQueryParams withAction(PostCreateHsmClientCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateHsmClientCertificateVersionEnum version;
    public PostCreateHsmClientCertificateQueryParams withVersion(PostCreateHsmClientCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
}