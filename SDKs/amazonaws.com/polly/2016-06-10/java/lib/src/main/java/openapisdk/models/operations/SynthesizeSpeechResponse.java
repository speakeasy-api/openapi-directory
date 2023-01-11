package openapisdk.models.operations;



public class SynthesizeSpeechResponse {
    public String contentType;
    public SynthesizeSpeechResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object engineNotSupportedException;
    public SynthesizeSpeechResponse withEngineNotSupportedException(Object engineNotSupportedException) {
        this.engineNotSupportedException = engineNotSupportedException;
        return this;
    }
    public Object invalidSampleRateException;
    public SynthesizeSpeechResponse withInvalidSampleRateException(Object invalidSampleRateException) {
        this.invalidSampleRateException = invalidSampleRateException;
        return this;
    }
    public Object invalidSsmlException;
    public SynthesizeSpeechResponse withInvalidSsmlException(Object invalidSsmlException) {
        this.invalidSsmlException = invalidSsmlException;
        return this;
    }
    public Object languageNotSupportedException;
    public SynthesizeSpeechResponse withLanguageNotSupportedException(Object languageNotSupportedException) {
        this.languageNotSupportedException = languageNotSupportedException;
        return this;
    }
    public Object lexiconNotFoundException;
    public SynthesizeSpeechResponse withLexiconNotFoundException(Object lexiconNotFoundException) {
        this.lexiconNotFoundException = lexiconNotFoundException;
        return this;
    }
    public Object marksNotSupportedForFormatException;
    public SynthesizeSpeechResponse withMarksNotSupportedForFormatException(Object marksNotSupportedForFormatException) {
        this.marksNotSupportedForFormatException = marksNotSupportedForFormatException;
        return this;
    }
    public Object serviceFailureException;
    public SynthesizeSpeechResponse withServiceFailureException(Object serviceFailureException) {
        this.serviceFailureException = serviceFailureException;
        return this;
    }
    public Object ssmlMarksNotSupportedForTextTypeException;
    public SynthesizeSpeechResponse withSsmlMarksNotSupportedForTextTypeException(Object ssmlMarksNotSupportedForTextTypeException) {
        this.ssmlMarksNotSupportedForTextTypeException = ssmlMarksNotSupportedForTextTypeException;
        return this;
    }
    public Long statusCode;
    public SynthesizeSpeechResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SynthesizeSpeechOutput synthesizeSpeechOutput;
    public SynthesizeSpeechResponse withSynthesizeSpeechOutput(openapisdk.models.shared.SynthesizeSpeechOutput synthesizeSpeechOutput) {
        this.synthesizeSpeechOutput = synthesizeSpeechOutput;
        return this;
    }
    public Object textLengthExceededException;
    public SynthesizeSpeechResponse withTextLengthExceededException(Object textLengthExceededException) {
        this.textLengthExceededException = textLengthExceededException;
        return this;
    }
}