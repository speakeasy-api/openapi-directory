package openapisdk.models.operations;



public class CustomInsurancePlanNamesReadResponse {
    public String contentType;
    public CustomInsurancePlanNamesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomInsurancePlanName customInsurancePlanName;
    public CustomInsurancePlanNamesReadResponse withCustomInsurancePlanName(openapisdk.models.shared.CustomInsurancePlanName customInsurancePlanName) {
        this.customInsurancePlanName = customInsurancePlanName;
        return this;
    }
    public Long statusCode;
    public CustomInsurancePlanNamesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}