package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminSetAnnouncementRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Announcement request;
    public EnterpriseAdminSetAnnouncementRequest withRequest(openapisdk.models.shared.Announcement request) {
        this.request = request;
        return this;
    }
}