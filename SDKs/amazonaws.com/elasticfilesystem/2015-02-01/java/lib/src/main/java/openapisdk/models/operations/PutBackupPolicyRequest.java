package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutBackupPolicyRequest {
    public PutBackupPolicyPathParams pathParams;
    public PutBackupPolicyRequest withPathParams(PutBackupPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutBackupPolicyHeaders headers;
    public PutBackupPolicyRequest withHeaders(PutBackupPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutBackupPolicyRequestBody request;
    public PutBackupPolicyRequest withRequest(PutBackupPolicyRequestBody request) {
        this.request = request;
        return this;
    }
}