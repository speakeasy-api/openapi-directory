package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdminRespondToAuthChallengeRequest {
    public AdminRespondToAuthChallengeHeaders headers;
    public AdminRespondToAuthChallengeRequest withHeaders(AdminRespondToAuthChallengeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AdminRespondToAuthChallengeRequest request;
    public AdminRespondToAuthChallengeRequest withRequest(openapisdk.models.shared.AdminRespondToAuthChallengeRequest request) {
        this.request = request;
        return this;
    }
}