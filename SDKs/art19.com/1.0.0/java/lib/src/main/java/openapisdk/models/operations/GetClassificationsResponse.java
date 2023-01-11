package openapisdk.models.operations;



public class GetClassificationsResponse {
    public String contentType;
    public GetClassificationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetClassificationsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetClassificationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetClassifications200ApplicationVndApiPlusJson getClassifications200ApplicationVndApiPlusJsonObject;
    public GetClassificationsResponse withGetClassifications200ApplicationVndApiPlusJsonObject(GetClassifications200ApplicationVndApiPlusJson getClassifications200ApplicationVndApiPlusJsonObject) {
        this.getClassifications200ApplicationVndApiPlusJsonObject = getClassifications200ApplicationVndApiPlusJsonObject;
        return this;
    }
    public GetClassifications400ApplicationVndApiPlusJson getClassifications400ApplicationVndApiPlusJsonObject;
    public GetClassificationsResponse withGetClassifications400ApplicationVndApiPlusJsonObject(GetClassifications400ApplicationVndApiPlusJson getClassifications400ApplicationVndApiPlusJsonObject) {
        this.getClassifications400ApplicationVndApiPlusJsonObject = getClassifications400ApplicationVndApiPlusJsonObject;
        return this;
    }
}