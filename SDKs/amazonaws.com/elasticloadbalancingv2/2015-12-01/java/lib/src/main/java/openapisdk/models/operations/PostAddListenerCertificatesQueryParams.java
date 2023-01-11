package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddListenerCertificatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAddListenerCertificatesActionEnum action;
    public PostAddListenerCertificatesQueryParams withAction(PostAddListenerCertificatesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAddListenerCertificatesVersionEnum version;
    public PostAddListenerCertificatesQueryParams withVersion(PostAddListenerCertificatesVersionEnum version) {
        this.version = version;
        return this;
    }
}