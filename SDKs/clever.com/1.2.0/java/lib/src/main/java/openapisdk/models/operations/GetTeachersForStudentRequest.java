package openapisdk.models.operations;



public class GetTeachersForStudentRequest {
    public GetTeachersForStudentPathParams pathParams;
    public GetTeachersForStudentRequest withPathParams(GetTeachersForStudentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeachersForStudentQueryParams queryParams;
    public GetTeachersForStudentRequest withQueryParams(GetTeachersForStudentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}