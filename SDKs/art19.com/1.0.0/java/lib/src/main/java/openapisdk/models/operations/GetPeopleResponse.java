package openapisdk.models.operations;



public class GetPeopleResponse {
    public String contentType;
    public GetPeopleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPeopleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetPeopleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetPeople200ApplicationVndApiPlusJson getPeople200ApplicationVndApiPlusJsonObject;
    public GetPeopleResponse withGetPeople200ApplicationVndApiPlusJsonObject(GetPeople200ApplicationVndApiPlusJson getPeople200ApplicationVndApiPlusJsonObject) {
        this.getPeople200ApplicationVndApiPlusJsonObject = getPeople200ApplicationVndApiPlusJsonObject;
        return this;
    }
    public GetPeople400ApplicationVndApiPlusJson getPeople400ApplicationVndApiPlusJsonObject;
    public GetPeopleResponse withGetPeople400ApplicationVndApiPlusJsonObject(GetPeople400ApplicationVndApiPlusJson getPeople400ApplicationVndApiPlusJsonObject) {
        this.getPeople400ApplicationVndApiPlusJsonObject = getPeople400ApplicationVndApiPlusJsonObject;
        return this;
    }
}