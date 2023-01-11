package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateSigningCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateSigningCertificateActionEnum action;
    public PostUpdateSigningCertificateQueryParams withAction(PostUpdateSigningCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateSigningCertificateVersionEnum version;
    public PostUpdateSigningCertificateQueryParams withVersion(PostUpdateSigningCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
}