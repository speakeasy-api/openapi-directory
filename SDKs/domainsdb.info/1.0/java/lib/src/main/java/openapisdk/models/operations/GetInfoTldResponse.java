package openapisdk.models.operations;



public class GetInfoTldResponse {
    public String contentType;
    public GetInfoTldResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetInfoTldResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ZoneInfo[] zoneInfos;
    public GetInfoTldResponse withZoneInfos(openapisdk.models.shared.ZoneInfo[] zoneInfos) {
        this.zoneInfos = zoneInfos;
        return this;
    }
}