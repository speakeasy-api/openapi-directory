package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportSourceCredentialsRequest {
    public ImportSourceCredentialsHeaders headers;
    public ImportSourceCredentialsRequest withHeaders(ImportSourceCredentialsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImportSourceCredentialsInput request;
    public ImportSourceCredentialsRequest withRequest(openapisdk.models.shared.ImportSourceCredentialsInput request) {
        this.request = request;
        return this;
    }
}