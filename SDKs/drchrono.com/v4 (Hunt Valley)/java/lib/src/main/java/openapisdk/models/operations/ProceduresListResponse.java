package openapisdk.models.operations;



public class ProceduresListResponse {
    public String contentType;
    public ProceduresListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProceduresListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ProceduresList200ApplicationJson proceduresList200ApplicationJSONObject;
    public ProceduresListResponse withProceduresList200ApplicationJsonObject(ProceduresList200ApplicationJson proceduresList200ApplicationJSONObject) {
        this.proceduresList200ApplicationJSONObject = proceduresList200ApplicationJSONObject;
        return this;
    }
}