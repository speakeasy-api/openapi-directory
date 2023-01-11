package openapisdk.models.operations;



public class GetAlmawsV1TaskListsPrintoutsResponse {
    public byte[] body;
    public GetAlmawsV1TaskListsPrintoutsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAlmawsV1TaskListsPrintoutsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAlmawsV1TaskListsPrintoutsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetAlmawsV1TaskListsPrintoutsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAlmawsV1TaskListsPrintouts200ApplicationJson getAlmawsV1TaskListsPrintouts200ApplicationJSONObject;
    public GetAlmawsV1TaskListsPrintoutsResponse withGetAlmawsV1TaskListsPrintouts200ApplicationJsonObject(GetAlmawsV1TaskListsPrintouts200ApplicationJson getAlmawsV1TaskListsPrintouts200ApplicationJSONObject) {
        this.getAlmawsV1TaskListsPrintouts200ApplicationJSONObject = getAlmawsV1TaskListsPrintouts200ApplicationJSONObject;
        return this;
    }
}