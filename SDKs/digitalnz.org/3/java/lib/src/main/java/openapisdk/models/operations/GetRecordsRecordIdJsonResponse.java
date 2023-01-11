package openapisdk.models.operations;



public class GetRecordsRecordIdJsonResponse {
    public byte[] body;
    public GetRecordsRecordIdJsonResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetRecordsRecordIdJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRecordsRecordIdJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getRecordsRecordIdJSON403ApplicationJSONObject;
    public GetRecordsRecordIdJsonResponse withGetRecordsRecordIdJson403ApplicationJsonObject(java.util.Map<String, Object> getRecordsRecordIdJSON403ApplicationJSONObject) {
        this.getRecordsRecordIdJSON403ApplicationJSONObject = getRecordsRecordIdJSON403ApplicationJSONObject;
        return this;
    }
    public java.util.Map<String, Object> getRecordsRecordIdJSON404ApplicationJSONObject;
    public GetRecordsRecordIdJsonResponse withGetRecordsRecordIdJson404ApplicationJsonObject(java.util.Map<String, Object> getRecordsRecordIdJSON404ApplicationJSONObject) {
        this.getRecordsRecordIdJSON404ApplicationJSONObject = getRecordsRecordIdJSON404ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Record record;
    public GetRecordsRecordIdJsonResponse withRecord(openapisdk.models.shared.Record record) {
        this.record = record;
        return this;
    }
}