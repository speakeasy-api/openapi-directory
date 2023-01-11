package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppPackagesPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateAppPkg request;
    public AppPackagesPostRequest withRequest(openapisdk.models.shared.CreateAppPkg request) {
        this.request = request;
        return this;
    }
}