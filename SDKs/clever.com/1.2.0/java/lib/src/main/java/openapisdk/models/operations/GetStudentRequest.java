package openapisdk.models.operations;



public class GetStudentRequest {
    public GetStudentPathParams pathParams;
    public GetStudentRequest withPathParams(GetStudentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetStudentQueryParams queryParams;
    public GetStudentRequest withQueryParams(GetStudentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}