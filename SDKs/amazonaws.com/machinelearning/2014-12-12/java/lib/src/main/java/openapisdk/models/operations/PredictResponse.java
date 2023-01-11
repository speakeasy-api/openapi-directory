package openapisdk.models.operations;



public class PredictResponse {
    public String contentType;
    public PredictResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public PredictResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public PredictResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public PredictResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.PredictOutput predictOutput;
    public PredictResponse withPredictOutput(openapisdk.models.shared.PredictOutput predictOutput) {
        this.predictOutput = predictOutput;
        return this;
    }
    public Object predictorNotMountedException;
    public PredictResponse withPredictorNotMountedException(Object predictorNotMountedException) {
        this.predictorNotMountedException = predictorNotMountedException;
        return this;
    }
    public Object resourceNotFoundException;
    public PredictResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PredictResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}