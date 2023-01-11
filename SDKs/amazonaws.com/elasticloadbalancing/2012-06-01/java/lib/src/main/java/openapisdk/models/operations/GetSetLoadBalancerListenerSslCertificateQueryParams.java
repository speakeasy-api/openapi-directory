package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetLoadBalancerListenerSslCertificateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSetLoadBalancerListenerSslCertificateActionEnum action;
    public GetSetLoadBalancerListenerSslCertificateQueryParams withAction(GetSetLoadBalancerListenerSslCertificateActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerName")
    public String loadBalancerName;
    public GetSetLoadBalancerListenerSslCertificateQueryParams withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerPort")
    public Long loadBalancerPort;
    public GetSetLoadBalancerListenerSslCertificateQueryParams withLoadBalancerPort(Long loadBalancerPort) {
        this.loadBalancerPort = loadBalancerPort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SSLCertificateId")
    public String sslCertificateId;
    public GetSetLoadBalancerListenerSslCertificateQueryParams withSslCertificateId(String sslCertificateId) {
        this.sslCertificateId = sslCertificateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSetLoadBalancerListenerSslCertificateVersionEnum version;
    public GetSetLoadBalancerListenerSslCertificateQueryParams withVersion(GetSetLoadBalancerListenerSslCertificateVersionEnum version) {
        this.version = version;
        return this;
    }
}