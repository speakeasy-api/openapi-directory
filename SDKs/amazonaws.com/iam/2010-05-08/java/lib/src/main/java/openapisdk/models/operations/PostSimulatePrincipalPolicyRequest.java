package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSimulatePrincipalPolicyRequest {
    public PostSimulatePrincipalPolicyQueryParams queryParams;
    public PostSimulatePrincipalPolicyRequest withQueryParams(PostSimulatePrincipalPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSimulatePrincipalPolicyHeaders headers;
    public PostSimulatePrincipalPolicyRequest withHeaders(PostSimulatePrincipalPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSimulatePrincipalPolicyRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}