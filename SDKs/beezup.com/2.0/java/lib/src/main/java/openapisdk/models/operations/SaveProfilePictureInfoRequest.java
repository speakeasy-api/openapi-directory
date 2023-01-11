package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SaveProfilePictureInfoRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProfilePictureInfo request;
    public SaveProfilePictureInfoRequest withRequest(openapisdk.models.shared.ProfilePictureInfo request) {
        this.request = request;
        return this;
    }
}