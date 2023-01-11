package openapisdk.models.operations;



public class GetTeamsResponse {
    public String contentType;
    public GetTeamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTeamsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetTeamsResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PaginatedTeams paginatedTeams;
    public GetTeamsResponse withPaginatedTeams(openapisdk.models.shared.PaginatedTeams paginatedTeams) {
        this.paginatedTeams = paginatedTeams;
        return this;
    }
}