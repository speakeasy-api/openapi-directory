package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateParticipantConnectionRequest {
    public CreateParticipantConnectionHeaders headers;
    public CreateParticipantConnectionRequest withHeaders(CreateParticipantConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateParticipantConnectionRequestBody request;
    public CreateParticipantConnectionRequest withRequest(CreateParticipantConnectionRequestBody request) {
        this.request = request;
        return this;
    }
}