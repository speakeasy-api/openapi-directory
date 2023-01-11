package openapisdk.models.operations;



public class GetAlmawsV1TaskListsRsLendingRequestsResponse {
    public byte[] body;
    public GetAlmawsV1TaskListsRsLendingRequestsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAlmawsV1TaskListsRsLendingRequestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAlmawsV1TaskListsRsLendingRequestsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetAlmawsV1TaskListsRsLendingRequestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAlmawsV1TaskListsRsLendingRequests200ApplicationJson getAlmawsV1TaskListsRsLendingRequests200ApplicationJSONObject;
    public GetAlmawsV1TaskListsRsLendingRequestsResponse withGetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonObject(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJson getAlmawsV1TaskListsRsLendingRequests200ApplicationJSONObject) {
        this.getAlmawsV1TaskListsRsLendingRequests200ApplicationJSONObject = getAlmawsV1TaskListsRsLendingRequests200ApplicationJSONObject;
        return this;
    }
}