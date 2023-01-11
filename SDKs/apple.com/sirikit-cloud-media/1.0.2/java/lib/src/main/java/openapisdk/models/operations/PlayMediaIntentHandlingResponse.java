package openapisdk.models.operations;



public class PlayMediaIntentHandlingResponse {
    public String contentType;
    public PlayMediaIntentHandlingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] playMediaIntentHandlingInvocationResponses;
    public PlayMediaIntentHandlingResponse withPlayMediaIntentHandlingInvocationResponses(Object[] playMediaIntentHandlingInvocationResponses) {
        this.playMediaIntentHandlingInvocationResponses = playMediaIntentHandlingInvocationResponses;
        return this;
    }
    public Long statusCode;
    public PlayMediaIntentHandlingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}