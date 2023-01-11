package openapisdk.models.operations;



public class ListMeshesResponse {
    public Object badRequestException;
    public ListMeshesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListMeshesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public ListMeshesResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public ListMeshesResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public openapisdk.models.shared.ListMeshesOutput listMeshesOutput;
    public ListMeshesResponse withListMeshesOutput(openapisdk.models.shared.ListMeshesOutput listMeshesOutput) {
        this.listMeshesOutput = listMeshesOutput;
        return this;
    }
    public Object notFoundException;
    public ListMeshesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListMeshesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListMeshesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListMeshesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}