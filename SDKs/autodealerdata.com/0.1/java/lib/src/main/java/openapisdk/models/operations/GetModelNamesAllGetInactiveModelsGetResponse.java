package openapisdk.models.operations;



public class GetModelNamesAllGetInactiveModelsGetResponse {
    public String contentType;
    public GetModelNamesAllGetInactiveModelsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetModelNamesAllGetInactiveModelsGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.ModelResp modelResp;
    public GetModelNamesAllGetInactiveModelsGetResponse withModelResp(openapisdk.models.shared.ModelResp modelResp) {
        this.modelResp = modelResp;
        return this;
    }
    public Long statusCode;
    public GetModelNamesAllGetInactiveModelsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}