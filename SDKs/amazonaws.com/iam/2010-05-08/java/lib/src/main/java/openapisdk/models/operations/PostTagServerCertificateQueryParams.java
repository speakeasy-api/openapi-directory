package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTagServerCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostTagServerCertificateActionEnum action;
    public PostTagServerCertificateQueryParams withAction(PostTagServerCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostTagServerCertificateVersionEnum version;
    public PostTagServerCertificateQueryParams withVersion(PostTagServerCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
}