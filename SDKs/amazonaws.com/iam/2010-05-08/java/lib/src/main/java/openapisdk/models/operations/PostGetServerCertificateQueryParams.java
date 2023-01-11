package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetServerCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetServerCertificateActionEnum action;
    public PostGetServerCertificateQueryParams withAction(PostGetServerCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetServerCertificateVersionEnum version;
    public PostGetServerCertificateQueryParams withVersion(PostGetServerCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
}