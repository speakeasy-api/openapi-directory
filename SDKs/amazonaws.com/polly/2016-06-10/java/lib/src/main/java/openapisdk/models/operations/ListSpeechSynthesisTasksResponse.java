package openapisdk.models.operations;



public class ListSpeechSynthesisTasksResponse {
    public String contentType;
    public ListSpeechSynthesisTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListSpeechSynthesisTasksResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListSpeechSynthesisTasksOutput listSpeechSynthesisTasksOutput;
    public ListSpeechSynthesisTasksResponse withListSpeechSynthesisTasksOutput(openapisdk.models.shared.ListSpeechSynthesisTasksOutput listSpeechSynthesisTasksOutput) {
        this.listSpeechSynthesisTasksOutput = listSpeechSynthesisTasksOutput;
        return this;
    }
    public Object serviceFailureException;
    public ListSpeechSynthesisTasksResponse withServiceFailureException(Object serviceFailureException) {
        this.serviceFailureException = serviceFailureException;
        return this;
    }
    public Long statusCode;
    public ListSpeechSynthesisTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}