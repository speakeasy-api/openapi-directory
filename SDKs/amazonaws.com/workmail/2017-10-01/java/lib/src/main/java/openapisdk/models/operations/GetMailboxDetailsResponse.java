package openapisdk.models.operations;



public class GetMailboxDetailsResponse {
    public String contentType;
    public GetMailboxDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetMailboxDetailsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetMailboxDetailsResponse getMailboxDetailsResponse;
    public GetMailboxDetailsResponse withGetMailboxDetailsResponse(openapisdk.models.shared.GetMailboxDetailsResponse getMailboxDetailsResponse) {
        this.getMailboxDetailsResponse = getMailboxDetailsResponse;
        return this;
    }
    public Object organizationNotFoundException;
    public GetMailboxDetailsResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public GetMailboxDetailsResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public GetMailboxDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}