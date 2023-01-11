package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGitHubAccountTokenRequest {
    public DeleteGitHubAccountTokenHeaders headers;
    public DeleteGitHubAccountTokenRequest withHeaders(DeleteGitHubAccountTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteGitHubAccountTokenInput request;
    public DeleteGitHubAccountTokenRequest withRequest(openapisdk.models.shared.DeleteGitHubAccountTokenInput request) {
        this.request = request;
        return this;
    }
}