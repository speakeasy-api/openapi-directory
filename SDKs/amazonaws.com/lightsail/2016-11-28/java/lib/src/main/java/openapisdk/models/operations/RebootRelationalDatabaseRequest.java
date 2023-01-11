package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RebootRelationalDatabaseRequest {
    public RebootRelationalDatabaseHeaders headers;
    public RebootRelationalDatabaseRequest withHeaders(RebootRelationalDatabaseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RebootRelationalDatabaseRequest request;
    public RebootRelationalDatabaseRequest withRequest(openapisdk.models.shared.RebootRelationalDatabaseRequest request) {
        this.request = request;
        return this;
    }
}