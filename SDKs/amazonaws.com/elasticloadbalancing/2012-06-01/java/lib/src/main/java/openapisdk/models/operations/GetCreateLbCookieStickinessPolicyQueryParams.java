package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateLbCookieStickinessPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateLbCookieStickinessPolicyActionEnum action;
    public GetCreateLbCookieStickinessPolicyQueryParams withAction(GetCreateLbCookieStickinessPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CookieExpirationPeriod")
    public Long cookieExpirationPeriod;
    public GetCreateLbCookieStickinessPolicyQueryParams withCookieExpirationPeriod(Long cookieExpirationPeriod) {
        this.cookieExpirationPeriod = cookieExpirationPeriod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerName")
    public String loadBalancerName;
    public GetCreateLbCookieStickinessPolicyQueryParams withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyName")
    public String policyName;
    public GetCreateLbCookieStickinessPolicyQueryParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateLbCookieStickinessPolicyVersionEnum version;
    public GetCreateLbCookieStickinessPolicyQueryParams withVersion(GetCreateLbCookieStickinessPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}