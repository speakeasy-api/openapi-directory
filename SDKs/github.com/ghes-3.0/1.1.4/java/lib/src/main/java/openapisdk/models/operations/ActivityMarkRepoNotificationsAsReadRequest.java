package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivityMarkRepoNotificationsAsReadRequest {
    public ActivityMarkRepoNotificationsAsReadPathParams pathParams;
    public ActivityMarkRepoNotificationsAsReadRequest withPathParams(ActivityMarkRepoNotificationsAsReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ActivityMarkRepoNotificationsAsReadRequestBody request;
    public ActivityMarkRepoNotificationsAsReadRequest withRequest(ActivityMarkRepoNotificationsAsReadRequestBody request) {
        this.request = request;
        return this;
    }
}