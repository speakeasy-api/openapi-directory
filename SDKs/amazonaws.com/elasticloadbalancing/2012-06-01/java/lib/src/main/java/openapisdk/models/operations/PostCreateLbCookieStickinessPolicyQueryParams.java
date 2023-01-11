package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateLbCookieStickinessPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateLbCookieStickinessPolicyActionEnum action;
    public PostCreateLbCookieStickinessPolicyQueryParams withAction(PostCreateLbCookieStickinessPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateLbCookieStickinessPolicyVersionEnum version;
    public PostCreateLbCookieStickinessPolicyQueryParams withVersion(PostCreateLbCookieStickinessPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}