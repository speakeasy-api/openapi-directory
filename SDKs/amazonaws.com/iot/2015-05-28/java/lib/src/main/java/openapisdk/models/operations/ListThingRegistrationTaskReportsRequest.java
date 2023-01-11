package openapisdk.models.operations;



public class ListThingRegistrationTaskReportsRequest {
    public ListThingRegistrationTaskReportsPathParams pathParams;
    public ListThingRegistrationTaskReportsRequest withPathParams(ListThingRegistrationTaskReportsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListThingRegistrationTaskReportsQueryParams queryParams;
    public ListThingRegistrationTaskReportsRequest withQueryParams(ListThingRegistrationTaskReportsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListThingRegistrationTaskReportsHeaders headers;
    public ListThingRegistrationTaskReportsRequest withHeaders(ListThingRegistrationTaskReportsHeaders headers) {
        this.headers = headers;
        return this;
    }
}