package openapisdk.models.operations;



public class GetClassificationInclusionsResponse {
    public String contentType;
    public GetClassificationInclusionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetClassificationInclusionsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetClassificationInclusionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetClassificationInclusions200ApplicationVndApiPlusJson getClassificationInclusions200ApplicationVndApiPlusJsonObject;
    public GetClassificationInclusionsResponse withGetClassificationInclusions200ApplicationVndApiPlusJsonObject(GetClassificationInclusions200ApplicationVndApiPlusJson getClassificationInclusions200ApplicationVndApiPlusJsonObject) {
        this.getClassificationInclusions200ApplicationVndApiPlusJsonObject = getClassificationInclusions200ApplicationVndApiPlusJsonObject;
        return this;
    }
    public GetClassificationInclusions400ApplicationVndApiPlusJson getClassificationInclusions400ApplicationVndApiPlusJsonObject;
    public GetClassificationInclusionsResponse withGetClassificationInclusions400ApplicationVndApiPlusJsonObject(GetClassificationInclusions400ApplicationVndApiPlusJson getClassificationInclusions400ApplicationVndApiPlusJsonObject) {
        this.getClassificationInclusions400ApplicationVndApiPlusJsonObject = getClassificationInclusions400ApplicationVndApiPlusJsonObject;
        return this;
    }
}