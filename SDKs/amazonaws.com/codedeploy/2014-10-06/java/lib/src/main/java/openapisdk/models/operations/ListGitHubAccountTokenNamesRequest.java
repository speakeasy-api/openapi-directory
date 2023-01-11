package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListGitHubAccountTokenNamesRequest {
    public ListGitHubAccountTokenNamesHeaders headers;
    public ListGitHubAccountTokenNamesRequest withHeaders(ListGitHubAccountTokenNamesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListGitHubAccountTokenNamesInput request;
    public ListGitHubAccountTokenNamesRequest withRequest(openapisdk.models.shared.ListGitHubAccountTokenNamesInput request) {
        this.request = request;
        return this;
    }
}