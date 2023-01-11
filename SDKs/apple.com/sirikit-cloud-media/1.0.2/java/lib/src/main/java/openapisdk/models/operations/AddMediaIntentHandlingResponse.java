package openapisdk.models.operations;



public class AddMediaIntentHandlingResponse {
    public Object[] addMediaIntentHandlingInvocationResponses;
    public AddMediaIntentHandlingResponse withAddMediaIntentHandlingInvocationResponses(Object[] addMediaIntentHandlingInvocationResponses) {
        this.addMediaIntentHandlingInvocationResponses = addMediaIntentHandlingInvocationResponses;
        return this;
    }
    public String contentType;
    public AddMediaIntentHandlingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddMediaIntentHandlingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}