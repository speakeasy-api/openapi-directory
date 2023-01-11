package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SavePersonalInfoRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PersonalInfo request;
    public SavePersonalInfoRequest withRequest(openapisdk.models.shared.PersonalInfo request) {
        this.request = request;
        return this;
    }
}