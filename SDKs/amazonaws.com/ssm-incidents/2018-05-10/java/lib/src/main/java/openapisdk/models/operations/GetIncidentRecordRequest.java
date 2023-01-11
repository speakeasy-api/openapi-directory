package openapisdk.models.operations;



public class GetIncidentRecordRequest {
    public GetIncidentRecordQueryParams queryParams;
    public GetIncidentRecordRequest withQueryParams(GetIncidentRecordQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetIncidentRecordHeaders headers;
    public GetIncidentRecordRequest withHeaders(GetIncidentRecordHeaders headers) {
        this.headers = headers;
        return this;
    }
}