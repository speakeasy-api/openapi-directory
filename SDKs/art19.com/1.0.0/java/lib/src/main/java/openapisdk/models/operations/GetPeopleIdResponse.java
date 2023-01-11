package openapisdk.models.operations;



public class GetPeopleIdResponse {
    public String contentType;
    public GetPeopleIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPeopleIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetPeopleIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetPeopleId200ApplicationVndApiPlusJson getPeopleId200ApplicationVndApiPlusJsonObject;
    public GetPeopleIdResponse withGetPeopleId200ApplicationVndApiPlusJsonObject(GetPeopleId200ApplicationVndApiPlusJson getPeopleId200ApplicationVndApiPlusJsonObject) {
        this.getPeopleId200ApplicationVndApiPlusJsonObject = getPeopleId200ApplicationVndApiPlusJsonObject;
        return this;
    }
}