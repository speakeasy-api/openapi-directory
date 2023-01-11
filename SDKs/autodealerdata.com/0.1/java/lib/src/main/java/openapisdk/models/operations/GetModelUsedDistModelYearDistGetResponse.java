package openapisdk.models.operations;



public class GetModelUsedDistModelYearDistGetResponse {
    public String contentType;
    public GetModelUsedDistModelYearDistGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetModelUsedDistModelYearDistGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.ModelYearDistResp modelYearDistResp;
    public GetModelUsedDistModelYearDistGetResponse withModelYearDistResp(openapisdk.models.shared.ModelYearDistResp modelYearDistResp) {
        this.modelYearDistResp = modelYearDistResp;
        return this;
    }
    public Long statusCode;
    public GetModelUsedDistModelYearDistGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}