package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteServerCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteServerCertificateActionEnum action;
    public PostDeleteServerCertificateQueryParams withAction(PostDeleteServerCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteServerCertificateVersionEnum version;
    public PostDeleteServerCertificateQueryParams withVersion(PostDeleteServerCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
}