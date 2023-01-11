package openapisdk.models.operations;



public class ListInvitationsResponse {
    public String contentType;
    public ListInvitationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListInvitationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListInvitationsResponse listInvitationsResponse;
    public ListInvitationsResponse withListInvitationsResponse(openapisdk.models.shared.ListInvitationsResponse listInvitationsResponse) {
        this.listInvitationsResponse = listInvitationsResponse;
        return this;
    }
    public Long statusCode;
    public ListInvitationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListInvitationsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}