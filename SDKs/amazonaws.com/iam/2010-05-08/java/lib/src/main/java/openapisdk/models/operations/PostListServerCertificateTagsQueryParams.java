package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListServerCertificateTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListServerCertificateTagsActionEnum action;
    public PostListServerCertificateTagsQueryParams withAction(PostListServerCertificateTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListServerCertificateTagsVersionEnum version;
    public PostListServerCertificateTagsQueryParams withVersion(PostListServerCertificateTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}