package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppPackagePatchRequest {
    public AppPackagePatchPathParams pathParams;
    public AppPackagePatchRequest withPathParams(AppPackagePatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AppPkgInfoModifications request;
    public AppPackagePatchRequest withRequest(openapisdk.models.shared.AppPkgInfoModifications request) {
        this.request = request;
        return this;
    }
}