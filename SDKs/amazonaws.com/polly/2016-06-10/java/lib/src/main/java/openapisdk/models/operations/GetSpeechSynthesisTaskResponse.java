package openapisdk.models.operations;



public class GetSpeechSynthesisTaskResponse {
    public String contentType;
    public GetSpeechSynthesisTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSpeechSynthesisTaskOutput getSpeechSynthesisTaskOutput;
    public GetSpeechSynthesisTaskResponse withGetSpeechSynthesisTaskOutput(openapisdk.models.shared.GetSpeechSynthesisTaskOutput getSpeechSynthesisTaskOutput) {
        this.getSpeechSynthesisTaskOutput = getSpeechSynthesisTaskOutput;
        return this;
    }
    public Object invalidTaskIdException;
    public GetSpeechSynthesisTaskResponse withInvalidTaskIdException(Object invalidTaskIdException) {
        this.invalidTaskIdException = invalidTaskIdException;
        return this;
    }
    public Object serviceFailureException;
    public GetSpeechSynthesisTaskResponse withServiceFailureException(Object serviceFailureException) {
        this.serviceFailureException = serviceFailureException;
        return this;
    }
    public Long statusCode;
    public GetSpeechSynthesisTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object synthesisTaskNotFoundException;
    public GetSpeechSynthesisTaskResponse withSynthesisTaskNotFoundException(Object synthesisTaskNotFoundException) {
        this.synthesisTaskNotFoundException = synthesisTaskNotFoundException;
        return this;
    }
}