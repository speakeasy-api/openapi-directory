package openapisdk.models.operations;



public class ListExperimentTemplatesResponse {
    public String contentType;
    public ListExperimentTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListExperimentTemplatesResponse listExperimentTemplatesResponse;
    public ListExperimentTemplatesResponse withListExperimentTemplatesResponse(openapisdk.models.shared.ListExperimentTemplatesResponse listExperimentTemplatesResponse) {
        this.listExperimentTemplatesResponse = listExperimentTemplatesResponse;
        return this;
    }
    public Long statusCode;
    public ListExperimentTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListExperimentTemplatesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}