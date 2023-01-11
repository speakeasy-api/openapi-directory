package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppPkgNotificationPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AppPkgNotification request;
    public AppPkgNotificationPostRequest withRequest(openapisdk.models.shared.AppPkgNotification request) {
        this.request = request;
        return this;
    }
}