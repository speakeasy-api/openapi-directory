package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartIncidentRequest {
    public StartIncidentHeaders headers;
    public StartIncidentRequest withHeaders(StartIncidentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartIncidentRequestBody request;
    public StartIncidentRequest withRequest(StartIncidentRequestBody request) {
        this.request = request;
        return this;
    }
}