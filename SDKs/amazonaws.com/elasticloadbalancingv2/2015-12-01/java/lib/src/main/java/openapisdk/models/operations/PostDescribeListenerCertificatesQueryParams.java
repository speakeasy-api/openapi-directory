package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeListenerCertificatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeListenerCertificatesActionEnum action;
    public PostDescribeListenerCertificatesQueryParams withAction(PostDescribeListenerCertificatesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeListenerCertificatesVersionEnum version;
    public PostDescribeListenerCertificatesQueryParams withVersion(PostDescribeListenerCertificatesVersionEnum version) {
        this.version = version;
        return this;
    }
}