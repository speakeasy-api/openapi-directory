package openapisdk.models.operations;



public class GetClassificationInclusionsIdResponse {
    public String contentType;
    public GetClassificationInclusionsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetClassificationInclusionsIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetClassificationInclusionsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetClassificationInclusionsId200ApplicationVndApiPlusJson getClassificationInclusionsId200ApplicationVndApiPlusJsonObject;
    public GetClassificationInclusionsIdResponse withGetClassificationInclusionsId200ApplicationVndApiPlusJsonObject(GetClassificationInclusionsId200ApplicationVndApiPlusJson getClassificationInclusionsId200ApplicationVndApiPlusJsonObject) {
        this.getClassificationInclusionsId200ApplicationVndApiPlusJsonObject = getClassificationInclusionsId200ApplicationVndApiPlusJsonObject;
        return this;
    }
}