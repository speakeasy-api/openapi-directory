package openapisdk.models.operations;



public class DescribeWebsiteCertificateAuthorityResponse {
    public String contentType;
    public DescribeWebsiteCertificateAuthorityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeWebsiteCertificateAuthorityResponse describeWebsiteCertificateAuthorityResponse;
    public DescribeWebsiteCertificateAuthorityResponse withDescribeWebsiteCertificateAuthorityResponse(openapisdk.models.shared.DescribeWebsiteCertificateAuthorityResponse describeWebsiteCertificateAuthorityResponse) {
        this.describeWebsiteCertificateAuthorityResponse = describeWebsiteCertificateAuthorityResponse;
        return this;
    }
    public Object internalServerErrorException;
    public DescribeWebsiteCertificateAuthorityResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeWebsiteCertificateAuthorityResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeWebsiteCertificateAuthorityResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeWebsiteCertificateAuthorityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeWebsiteCertificateAuthorityResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public DescribeWebsiteCertificateAuthorityResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}