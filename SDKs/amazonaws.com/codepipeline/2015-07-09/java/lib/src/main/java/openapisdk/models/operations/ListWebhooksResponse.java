package openapisdk.models.operations;



public class ListWebhooksResponse {
    public String contentType;
    public ListWebhooksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListWebhooksResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListWebhooksOutput listWebhooksOutput;
    public ListWebhooksResponse withListWebhooksOutput(openapisdk.models.shared.ListWebhooksOutput listWebhooksOutput) {
        this.listWebhooksOutput = listWebhooksOutput;
        return this;
    }
    public Long statusCode;
    public ListWebhooksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListWebhooksResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}