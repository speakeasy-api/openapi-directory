package openapisdk.models.operations;



public class GetDealerSalesRegionSalesGetResponse {
    public String contentType;
    public GetDealerSalesRegionSalesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenericResponse genericResponse;
    public GetDealerSalesRegionSalesGetResponse withGenericResponse(openapisdk.models.shared.GenericResponse genericResponse) {
        this.genericResponse = genericResponse;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetDealerSalesRegionSalesGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public GetDealerSalesRegionSalesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}