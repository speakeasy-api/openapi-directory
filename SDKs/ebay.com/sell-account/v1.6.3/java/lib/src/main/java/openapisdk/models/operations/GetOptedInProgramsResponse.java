package openapisdk.models.operations;



public class GetOptedInProgramsResponse {
    public String contentType;
    public GetOptedInProgramsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Programs programs;
    public GetOptedInProgramsResponse withPrograms(openapisdk.models.shared.Programs programs) {
        this.programs = programs;
        return this;
    }
    public Long statusCode;
    public GetOptedInProgramsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}