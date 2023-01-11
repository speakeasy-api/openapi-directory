package openapisdk.models.operations;



public class GetFormByShareHashResponse {
    public String contentType;
    public GetFormByShareHashResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FormResponse formResponse;
    public GetFormByShareHashResponse withFormResponse(openapisdk.models.shared.FormResponse formResponse) {
        this.formResponse = formResponse;
        return this;
    }
    public Long statusCode;
    public GetFormByShareHashResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}