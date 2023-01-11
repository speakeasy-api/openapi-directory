package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportationMapCustomColumnRequest {
    public ImportationMapCustomColumnPathParams pathParams;
    public ImportationMapCustomColumnRequest withPathParams(ImportationMapCustomColumnPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MapBeezUpColumnRequest request;
    public ImportationMapCustomColumnRequest withRequest(openapisdk.models.shared.MapBeezUpColumnRequest request) {
        this.request = request;
        return this;
    }
}