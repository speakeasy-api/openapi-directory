package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportationSaveCustomColumnRequest {
    public ImportationSaveCustomColumnPathParams pathParams;
    public ImportationSaveCustomColumnRequest withPathParams(ImportationSaveCustomColumnPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ChangeCustomColumnRequest request;
    public ImportationSaveCustomColumnRequest withRequest(openapisdk.models.shared.ChangeCustomColumnRequest request) {
        this.request = request;
        return this;
    }
}