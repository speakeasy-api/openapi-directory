package openapisdk.models.operations;



public class GetVolumesFsNameJsonResponse {
    public String contentType;
    public GetVolumesFsNameJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFileshareDetails[] getFileshareDetails;
    public GetVolumesFsNameJsonResponse withGetFileshareDetails(openapisdk.models.shared.GetFileshareDetails[] getFileshareDetails) {
        this.getFileshareDetails = getFileshareDetails;
        return this;
    }
    public Long statusCode;
    public GetVolumesFsNameJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}