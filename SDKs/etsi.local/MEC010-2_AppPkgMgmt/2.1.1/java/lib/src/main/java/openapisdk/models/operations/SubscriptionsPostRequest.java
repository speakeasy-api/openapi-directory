package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscriptionsPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AppPkgSubscription request;
    public SubscriptionsPostRequest withRequest(openapisdk.models.shared.AppPkgSubscription request) {
        this.request = request;
        return this;
    }
}