package openapisdk.models.operations;



public class GetDistrictForTeacherResponse {
    public String contentType;
    public GetDistrictForTeacherResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DistrictResponse districtResponse;
    public GetDistrictForTeacherResponse withDistrictResponse(openapisdk.models.shared.DistrictResponse districtResponse) {
        this.districtResponse = districtResponse;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetDistrictForTeacherResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public Long statusCode;
    public GetDistrictForTeacherResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}