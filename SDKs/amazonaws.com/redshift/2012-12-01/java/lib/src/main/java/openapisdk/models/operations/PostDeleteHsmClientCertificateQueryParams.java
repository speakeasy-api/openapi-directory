package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteHsmClientCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteHsmClientCertificateActionEnum action;
    public PostDeleteHsmClientCertificateQueryParams withAction(PostDeleteHsmClientCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteHsmClientCertificateVersionEnum version;
    public PostDeleteHsmClientCertificateQueryParams withVersion(PostDeleteHsmClientCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
}