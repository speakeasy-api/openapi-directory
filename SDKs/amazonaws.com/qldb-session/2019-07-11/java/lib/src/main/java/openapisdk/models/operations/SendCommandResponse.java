package openapisdk.models.operations;



public class SendCommandResponse {
    public Object badRequestException;
    public SendCommandResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object capacityExceededException;
    public SendCommandResponse withCapacityExceededException(Object capacityExceededException) {
        this.capacityExceededException = capacityExceededException;
        return this;
    }
    public String contentType;
    public SendCommandResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidSessionException;
    public SendCommandResponse withInvalidSessionException(Object invalidSessionException) {
        this.invalidSessionException = invalidSessionException;
        return this;
    }
    public Object limitExceededException;
    public SendCommandResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object occConflictException;
    public SendCommandResponse withOccConflictException(Object occConflictException) {
        this.occConflictException = occConflictException;
        return this;
    }
    public Object rateExceededException;
    public SendCommandResponse withRateExceededException(Object rateExceededException) {
        this.rateExceededException = rateExceededException;
        return this;
    }
    public openapisdk.models.shared.SendCommandResult sendCommandResult;
    public SendCommandResponse withSendCommandResult(openapisdk.models.shared.SendCommandResult sendCommandResult) {
        this.sendCommandResult = sendCommandResult;
        return this;
    }
    public Long statusCode;
    public SendCommandResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}