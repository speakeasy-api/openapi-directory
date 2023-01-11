package openapisdk.models.operations;



public class GetContractTestRelationsResponse {
    public String contentType;
    public GetContractTestRelationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetContractTestRelationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetContractTestRelations200ApplicationJson getContractTestRelations200ApplicationJSONObject;
    public GetContractTestRelationsResponse withGetContractTestRelations200ApplicationJsonObject(GetContractTestRelations200ApplicationJson getContractTestRelations200ApplicationJSONObject) {
        this.getContractTestRelations200ApplicationJSONObject = getContractTestRelations200ApplicationJSONObject;
        return this;
    }
}