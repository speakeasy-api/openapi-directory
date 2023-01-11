package openapisdk.models.operations;



public class SendSerialConsoleSshPublicKeyResponse {
    public Object authException;
    public SendSerialConsoleSshPublicKeyResponse withAuthException(Object authException) {
        this.authException = authException;
        return this;
    }
    public String contentType;
    public SendSerialConsoleSshPublicKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object ec2InstanceNotFoundException;
    public SendSerialConsoleSshPublicKeyResponse withEc2InstanceNotFoundException(Object ec2InstanceNotFoundException) {
        this.ec2InstanceNotFoundException = ec2InstanceNotFoundException;
        return this;
    }
    public Object ec2InstanceTypeInvalidException;
    public SendSerialConsoleSshPublicKeyResponse withEc2InstanceTypeInvalidException(Object ec2InstanceTypeInvalidException) {
        this.ec2InstanceTypeInvalidException = ec2InstanceTypeInvalidException;
        return this;
    }
    public Object invalidArgsException;
    public SendSerialConsoleSshPublicKeyResponse withInvalidArgsException(Object invalidArgsException) {
        this.invalidArgsException = invalidArgsException;
        return this;
    }
    public openapisdk.models.shared.SendSerialConsoleSshPublicKeyResponse sendSerialConsoleSSHPublicKeyResponse;
    public SendSerialConsoleSshPublicKeyResponse withSendSerialConsoleSshPublicKeyResponse(openapisdk.models.shared.SendSerialConsoleSshPublicKeyResponse sendSerialConsoleSSHPublicKeyResponse) {
        this.sendSerialConsoleSSHPublicKeyResponse = sendSerialConsoleSSHPublicKeyResponse;
        return this;
    }
    public Object serialConsoleAccessDisabledException;
    public SendSerialConsoleSshPublicKeyResponse withSerialConsoleAccessDisabledException(Object serialConsoleAccessDisabledException) {
        this.serialConsoleAccessDisabledException = serialConsoleAccessDisabledException;
        return this;
    }
    public Object serialConsoleSessionLimitExceededException;
    public SendSerialConsoleSshPublicKeyResponse withSerialConsoleSessionLimitExceededException(Object serialConsoleSessionLimitExceededException) {
        this.serialConsoleSessionLimitExceededException = serialConsoleSessionLimitExceededException;
        return this;
    }
    public Object serialConsoleSessionUnavailableException;
    public SendSerialConsoleSshPublicKeyResponse withSerialConsoleSessionUnavailableException(Object serialConsoleSessionUnavailableException) {
        this.serialConsoleSessionUnavailableException = serialConsoleSessionUnavailableException;
        return this;
    }
    public Object serviceException;
    public SendSerialConsoleSshPublicKeyResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public SendSerialConsoleSshPublicKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public SendSerialConsoleSshPublicKeyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}