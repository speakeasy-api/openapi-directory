package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddClutterRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddClutterRequestBody request;
    public AddClutterRequest withRequest(AddClutterRequestBody request) {
        this.request = request;
        return this;
    }
    public AddClutterSecurity security;
    public AddClutterRequest withSecurity(AddClutterSecurity security) {
        this.security = security;
        return this;
    }
}