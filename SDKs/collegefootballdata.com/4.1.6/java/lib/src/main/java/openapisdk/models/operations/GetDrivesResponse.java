package openapisdk.models.operations;



public class GetDrivesResponse {
    public String contentType;
    public GetDrivesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Drive[] drives;
    public GetDrivesResponse withDrives(openapisdk.models.shared.Drive[] drives) {
        this.drives = drives;
        return this;
    }
    public Long statusCode;
    public GetDrivesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}