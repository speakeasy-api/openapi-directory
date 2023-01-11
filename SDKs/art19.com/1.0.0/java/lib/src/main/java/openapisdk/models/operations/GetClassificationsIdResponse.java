package openapisdk.models.operations;



public class GetClassificationsIdResponse {
    public String contentType;
    public GetClassificationsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetClassificationsIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetClassificationsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetClassificationsId200ApplicationVndApiPlusJson getClassificationsId200ApplicationVndApiPlusJsonObject;
    public GetClassificationsIdResponse withGetClassificationsId200ApplicationVndApiPlusJsonObject(GetClassificationsId200ApplicationVndApiPlusJson getClassificationsId200ApplicationVndApiPlusJsonObject) {
        this.getClassificationsId200ApplicationVndApiPlusJsonObject = getClassificationsId200ApplicationVndApiPlusJsonObject;
        return this;
    }
}