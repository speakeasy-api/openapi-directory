package openapisdk.models.operations;



public class GetReportsForCommitResponse {
    public String contentType;
    public GetReportsForCommitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetReportsForCommitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PaginatedReports paginatedReports;
    public GetReportsForCommitResponse withPaginatedReports(openapisdk.models.shared.PaginatedReports paginatedReports) {
        this.paginatedReports = paginatedReports;
        return this;
    }
}