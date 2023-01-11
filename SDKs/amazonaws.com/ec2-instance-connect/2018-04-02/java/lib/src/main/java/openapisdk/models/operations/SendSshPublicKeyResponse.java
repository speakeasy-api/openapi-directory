package openapisdk.models.operations;



public class SendSshPublicKeyResponse {
    public Object authException;
    public SendSshPublicKeyResponse withAuthException(Object authException) {
        this.authException = authException;
        return this;
    }
    public String contentType;
    public SendSshPublicKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object ec2InstanceNotFoundException;
    public SendSshPublicKeyResponse withEc2InstanceNotFoundException(Object ec2InstanceNotFoundException) {
        this.ec2InstanceNotFoundException = ec2InstanceNotFoundException;
        return this;
    }
    public Object invalidArgsException;
    public SendSshPublicKeyResponse withInvalidArgsException(Object invalidArgsException) {
        this.invalidArgsException = invalidArgsException;
        return this;
    }
    public openapisdk.models.shared.SendSshPublicKeyResponse sendSSHPublicKeyResponse;
    public SendSshPublicKeyResponse withSendSshPublicKeyResponse(openapisdk.models.shared.SendSshPublicKeyResponse sendSSHPublicKeyResponse) {
        this.sendSSHPublicKeyResponse = sendSSHPublicKeyResponse;
        return this;
    }
    public Object serviceException;
    public SendSshPublicKeyResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public SendSshPublicKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public SendSshPublicKeyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}