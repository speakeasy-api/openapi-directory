package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBundleRegistrationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bundle_id")
    public Integer bundleId;
    public GetBundleRegistrationsQueryParams withBundleId(Integer bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public GetBundleRegistrationsQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetBundleRegistrationsQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=user_id")
    public Integer userId;
    public GetBundleRegistrationsQueryParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}