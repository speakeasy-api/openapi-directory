package openapisdk.models.operations;



public class UpdateFormByIdResponse {
    public String contentType;
    public UpdateFormByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FormResponse formResponse;
    public UpdateFormByIdResponse withFormResponse(openapisdk.models.shared.FormResponse formResponse) {
        this.formResponse = formResponse;
        return this;
    }
    public Long statusCode;
    public UpdateFormByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}