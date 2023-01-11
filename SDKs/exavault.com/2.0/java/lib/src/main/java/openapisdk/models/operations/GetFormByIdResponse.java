package openapisdk.models.operations;



public class GetFormByIdResponse {
    public String contentType;
    public GetFormByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FormResponse formResponse;
    public GetFormByIdResponse withFormResponse(openapisdk.models.shared.FormResponse formResponse) {
        this.formResponse = formResponse;
        return this;
    }
    public Long statusCode;
    public GetFormByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}