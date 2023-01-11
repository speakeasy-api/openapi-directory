package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRelationalDatabaseMasterUserPasswordRequest {
    public GetRelationalDatabaseMasterUserPasswordHeaders headers;
    public GetRelationalDatabaseMasterUserPasswordRequest withHeaders(GetRelationalDatabaseMasterUserPasswordHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRelationalDatabaseMasterUserPasswordRequest request;
    public GetRelationalDatabaseMasterUserPasswordRequest withRequest(openapisdk.models.shared.GetRelationalDatabaseMasterUserPasswordRequest request) {
        this.request = request;
        return this;
    }
}