package openapisdk.models.operations;



public class ListNotificationsRequest {
    public ListNotificationsQueryParams queryParams;
    public ListNotificationsRequest withQueryParams(ListNotificationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListNotificationsHeaders headers;
    public ListNotificationsRequest withHeaders(ListNotificationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}