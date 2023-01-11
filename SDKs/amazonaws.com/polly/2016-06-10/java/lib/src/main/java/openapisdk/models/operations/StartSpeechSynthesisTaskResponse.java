package openapisdk.models.operations;



public class StartSpeechSynthesisTaskResponse {
    public String contentType;
    public StartSpeechSynthesisTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object engineNotSupportedException;
    public StartSpeechSynthesisTaskResponse withEngineNotSupportedException(Object engineNotSupportedException) {
        this.engineNotSupportedException = engineNotSupportedException;
        return this;
    }
    public Object invalidS3BucketException;
    public StartSpeechSynthesisTaskResponse withInvalidS3BucketException(Object invalidS3BucketException) {
        this.invalidS3BucketException = invalidS3BucketException;
        return this;
    }
    public Object invalidS3KeyException;
    public StartSpeechSynthesisTaskResponse withInvalidS3KeyException(Object invalidS3KeyException) {
        this.invalidS3KeyException = invalidS3KeyException;
        return this;
    }
    public Object invalidSampleRateException;
    public StartSpeechSynthesisTaskResponse withInvalidSampleRateException(Object invalidSampleRateException) {
        this.invalidSampleRateException = invalidSampleRateException;
        return this;
    }
    public Object invalidSnsTopicArnException;
    public StartSpeechSynthesisTaskResponse withInvalidSnsTopicArnException(Object invalidSnsTopicArnException) {
        this.invalidSnsTopicArnException = invalidSnsTopicArnException;
        return this;
    }
    public Object invalidSsmlException;
    public StartSpeechSynthesisTaskResponse withInvalidSsmlException(Object invalidSsmlException) {
        this.invalidSsmlException = invalidSsmlException;
        return this;
    }
    public Object languageNotSupportedException;
    public StartSpeechSynthesisTaskResponse withLanguageNotSupportedException(Object languageNotSupportedException) {
        this.languageNotSupportedException = languageNotSupportedException;
        return this;
    }
    public Object lexiconNotFoundException;
    public StartSpeechSynthesisTaskResponse withLexiconNotFoundException(Object lexiconNotFoundException) {
        this.lexiconNotFoundException = lexiconNotFoundException;
        return this;
    }
    public Object marksNotSupportedForFormatException;
    public StartSpeechSynthesisTaskResponse withMarksNotSupportedForFormatException(Object marksNotSupportedForFormatException) {
        this.marksNotSupportedForFormatException = marksNotSupportedForFormatException;
        return this;
    }
    public Object serviceFailureException;
    public StartSpeechSynthesisTaskResponse withServiceFailureException(Object serviceFailureException) {
        this.serviceFailureException = serviceFailureException;
        return this;
    }
    public Object ssmlMarksNotSupportedForTextTypeException;
    public StartSpeechSynthesisTaskResponse withSsmlMarksNotSupportedForTextTypeException(Object ssmlMarksNotSupportedForTextTypeException) {
        this.ssmlMarksNotSupportedForTextTypeException = ssmlMarksNotSupportedForTextTypeException;
        return this;
    }
    public openapisdk.models.shared.StartSpeechSynthesisTaskOutput startSpeechSynthesisTaskOutput;
    public StartSpeechSynthesisTaskResponse withStartSpeechSynthesisTaskOutput(openapisdk.models.shared.StartSpeechSynthesisTaskOutput startSpeechSynthesisTaskOutput) {
        this.startSpeechSynthesisTaskOutput = startSpeechSynthesisTaskOutput;
        return this;
    }
    public Long statusCode;
    public StartSpeechSynthesisTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object textLengthExceededException;
    public StartSpeechSynthesisTaskResponse withTextLengthExceededException(Object textLengthExceededException) {
        this.textLengthExceededException = textLengthExceededException;
        return this;
    }
}