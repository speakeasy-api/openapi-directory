package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetLoadBalancerListenerSslCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSetLoadBalancerListenerSslCertificateActionEnum action;
    public PostSetLoadBalancerListenerSslCertificateQueryParams withAction(PostSetLoadBalancerListenerSslCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSetLoadBalancerListenerSslCertificateVersionEnum version;
    public PostSetLoadBalancerListenerSslCertificateQueryParams withVersion(PostSetLoadBalancerListenerSslCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
}