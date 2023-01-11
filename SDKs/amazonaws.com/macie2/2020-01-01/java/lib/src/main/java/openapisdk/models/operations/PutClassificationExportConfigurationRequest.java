package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutClassificationExportConfigurationRequest {
    public PutClassificationExportConfigurationHeaders headers;
    public PutClassificationExportConfigurationRequest withHeaders(PutClassificationExportConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutClassificationExportConfigurationRequestBody request;
    public PutClassificationExportConfigurationRequest withRequest(PutClassificationExportConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}