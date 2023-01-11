package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RespondToAuthChallengeRequest {
    public RespondToAuthChallengeHeaders headers;
    public RespondToAuthChallengeRequest withHeaders(RespondToAuthChallengeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RespondToAuthChallengeRequest request;
    public RespondToAuthChallengeRequest withRequest(openapisdk.models.shared.RespondToAuthChallengeRequest request) {
        this.request = request;
        return this;
    }
}