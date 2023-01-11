package openapisdk.models.operations;



public class GetTestSuiteRelationsResponse {
    public String contentType;
    public GetTestSuiteRelationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTestSuiteRelationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTestSuiteRelations200ApplicationJson getTestSuiteRelations200ApplicationJSONObject;
    public GetTestSuiteRelationsResponse withGetTestSuiteRelations200ApplicationJsonObject(GetTestSuiteRelations200ApplicationJson getTestSuiteRelations200ApplicationJSONObject) {
        this.getTestSuiteRelations200ApplicationJSONObject = getTestSuiteRelations200ApplicationJSONObject;
        return this;
    }
}