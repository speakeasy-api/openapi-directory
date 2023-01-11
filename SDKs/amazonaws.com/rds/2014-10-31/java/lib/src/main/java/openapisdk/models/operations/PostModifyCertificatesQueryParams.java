package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyCertificatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyCertificatesActionEnum action;
    public PostModifyCertificatesQueryParams withAction(PostModifyCertificatesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyCertificatesVersionEnum version;
    public PostModifyCertificatesQueryParams withVersion(PostModifyCertificatesVersionEnum version) {
        this.version = version;
        return this;
    }
}