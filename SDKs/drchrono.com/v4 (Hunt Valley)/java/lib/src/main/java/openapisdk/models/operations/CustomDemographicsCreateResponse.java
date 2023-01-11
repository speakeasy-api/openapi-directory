package openapisdk.models.operations;



public class CustomDemographicsCreateResponse {
    public String contentType;
    public CustomDemographicsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomPatientFieldType customPatientFieldType;
    public CustomDemographicsCreateResponse withCustomPatientFieldType(openapisdk.models.shared.CustomPatientFieldType customPatientFieldType) {
        this.customPatientFieldType = customPatientFieldType;
        return this;
    }
    public Long statusCode;
    public CustomDemographicsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}