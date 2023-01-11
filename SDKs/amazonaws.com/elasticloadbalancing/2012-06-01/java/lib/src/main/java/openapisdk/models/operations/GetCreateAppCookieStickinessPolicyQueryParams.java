package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateAppCookieStickinessPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateAppCookieStickinessPolicyActionEnum action;
    public GetCreateAppCookieStickinessPolicyQueryParams withAction(GetCreateAppCookieStickinessPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CookieName")
    public String cookieName;
    public GetCreateAppCookieStickinessPolicyQueryParams withCookieName(String cookieName) {
        this.cookieName = cookieName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LoadBalancerName")
    public String loadBalancerName;
    public GetCreateAppCookieStickinessPolicyQueryParams withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyName")
    public String policyName;
    public GetCreateAppCookieStickinessPolicyQueryParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateAppCookieStickinessPolicyVersionEnum version;
    public GetCreateAppCookieStickinessPolicyQueryParams withVersion(GetCreateAppCookieStickinessPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}