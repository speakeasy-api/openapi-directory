package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateIncidentRecordRequest {
    public UpdateIncidentRecordHeaders headers;
    public UpdateIncidentRecordRequest withHeaders(UpdateIncidentRecordHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateIncidentRecordRequestBody request;
    public UpdateIncidentRecordRequest withRequest(UpdateIncidentRecordRequestBody request) {
        this.request = request;
        return this;
    }
}