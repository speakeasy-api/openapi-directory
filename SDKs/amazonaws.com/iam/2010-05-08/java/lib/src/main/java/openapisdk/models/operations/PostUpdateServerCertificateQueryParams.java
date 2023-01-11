package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateServerCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateServerCertificateActionEnum action;
    public PostUpdateServerCertificateQueryParams withAction(PostUpdateServerCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateServerCertificateVersionEnum version;
    public PostUpdateServerCertificateQueryParams withVersion(PostUpdateServerCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
}