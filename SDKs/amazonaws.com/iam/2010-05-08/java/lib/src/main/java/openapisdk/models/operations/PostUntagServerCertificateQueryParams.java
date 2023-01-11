package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUntagServerCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUntagServerCertificateActionEnum action;
    public PostUntagServerCertificateQueryParams withAction(PostUntagServerCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUntagServerCertificateVersionEnum version;
    public PostUntagServerCertificateQueryParams withVersion(PostUntagServerCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
}