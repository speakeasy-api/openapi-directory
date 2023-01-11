package openapisdk.models.operations;



public class InstallToRemoteAccessSessionResponse {
    public Object argumentException;
    public InstallToRemoteAccessSessionResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public InstallToRemoteAccessSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InstallToRemoteAccessSessionResult installToRemoteAccessSessionResult;
    public InstallToRemoteAccessSessionResponse withInstallToRemoteAccessSessionResult(openapisdk.models.shared.InstallToRemoteAccessSessionResult installToRemoteAccessSessionResult) {
        this.installToRemoteAccessSessionResult = installToRemoteAccessSessionResult;
        return this;
    }
    public Object limitExceededException;
    public InstallToRemoteAccessSessionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public InstallToRemoteAccessSessionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceAccountException;
    public InstallToRemoteAccessSessionResponse withServiceAccountException(Object serviceAccountException) {
        this.serviceAccountException = serviceAccountException;
        return this;
    }
    public Long statusCode;
    public InstallToRemoteAccessSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}