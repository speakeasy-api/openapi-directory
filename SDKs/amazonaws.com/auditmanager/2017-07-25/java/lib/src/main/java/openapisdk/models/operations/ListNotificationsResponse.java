package openapisdk.models.operations;



public class ListNotificationsResponse {
    public Object accessDeniedException;
    public ListNotificationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListNotificationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListNotificationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListNotificationsResponse listNotificationsResponse;
    public ListNotificationsResponse withListNotificationsResponse(openapisdk.models.shared.ListNotificationsResponse listNotificationsResponse) {
        this.listNotificationsResponse = listNotificationsResponse;
        return this;
    }
    public Long statusCode;
    public ListNotificationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListNotificationsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}