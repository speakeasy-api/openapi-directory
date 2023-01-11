package openapisdk.models.operations;



public class GetScalingPlanResourceForecastDataResponse {
    public String contentType;
    public GetScalingPlanResourceForecastDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetScalingPlanResourceForecastDataResponse getScalingPlanResourceForecastDataResponse;
    public GetScalingPlanResourceForecastDataResponse withGetScalingPlanResourceForecastDataResponse(openapisdk.models.shared.GetScalingPlanResourceForecastDataResponse getScalingPlanResourceForecastDataResponse) {
        this.getScalingPlanResourceForecastDataResponse = getScalingPlanResourceForecastDataResponse;
        return this;
    }
    public Object internalServiceException;
    public GetScalingPlanResourceForecastDataResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Long statusCode;
    public GetScalingPlanResourceForecastDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetScalingPlanResourceForecastDataResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}