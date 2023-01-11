package openapisdk.models.operations;



public class GetReservationRequest {
    public GetReservationPathParams pathParams;
    public GetReservationRequest withPathParams(GetReservationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetReservationQueryParams queryParams;
    public GetReservationRequest withQueryParams(GetReservationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}