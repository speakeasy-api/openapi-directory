package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateAppCookieStickinessPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateAppCookieStickinessPolicyActionEnum action;
    public PostCreateAppCookieStickinessPolicyQueryParams withAction(PostCreateAppCookieStickinessPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateAppCookieStickinessPolicyVersionEnum version;
    public PostCreateAppCookieStickinessPolicyQueryParams withVersion(PostCreateAppCookieStickinessPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}