package openapisdk.models.operations;



public class GetPublicListOfValuesResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetPublicListOfValuesResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetPublicListOfValuesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPublicListOfValuesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetPublicListOfValuesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PublicListOfValuesResponse publicListOfValuesResponse;
    public GetPublicListOfValuesResponse withPublicListOfValuesResponse(openapisdk.models.shared.PublicListOfValuesResponse publicListOfValuesResponse) {
        this.publicListOfValuesResponse = publicListOfValuesResponse;
        return this;
    }
}