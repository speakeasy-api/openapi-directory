package openapisdk.models.operations;



public class CustomDemographicsReadResponse {
    public String contentType;
    public CustomDemographicsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomPatientFieldType customPatientFieldType;
    public CustomDemographicsReadResponse withCustomPatientFieldType(openapisdk.models.shared.CustomPatientFieldType customPatientFieldType) {
        this.customPatientFieldType = customPatientFieldType;
        return this;
    }
    public Long statusCode;
    public CustomDemographicsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}