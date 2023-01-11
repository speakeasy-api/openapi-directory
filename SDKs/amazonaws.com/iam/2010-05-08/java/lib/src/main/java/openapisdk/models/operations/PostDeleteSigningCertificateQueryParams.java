package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSigningCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteSigningCertificateActionEnum action;
    public PostDeleteSigningCertificateQueryParams withAction(PostDeleteSigningCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteSigningCertificateVersionEnum version;
    public PostDeleteSigningCertificateQueryParams withVersion(PostDeleteSigningCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
}