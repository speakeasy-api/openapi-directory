package openapisdk.models.operations;



public class DescribeContainerResponse {
    public Object containerNotFoundException;
    public DescribeContainerResponse withContainerNotFoundException(Object containerNotFoundException) {
        this.containerNotFoundException = containerNotFoundException;
        return this;
    }
    public String contentType;
    public DescribeContainerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeContainerOutput describeContainerOutput;
    public DescribeContainerResponse withDescribeContainerOutput(openapisdk.models.shared.DescribeContainerOutput describeContainerOutput) {
        this.describeContainerOutput = describeContainerOutput;
        return this;
    }
    public Object internalServerError;
    public DescribeContainerResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public DescribeContainerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}