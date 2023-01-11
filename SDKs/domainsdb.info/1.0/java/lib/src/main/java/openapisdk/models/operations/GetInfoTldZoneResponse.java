package openapisdk.models.operations;



public class GetInfoTldZoneResponse {
    public String contentType;
    public GetInfoTldZoneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetInfoTldZoneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ZoneInfo zoneInfo;
    public GetInfoTldZoneResponse withZoneInfo(openapisdk.models.shared.ZoneInfo zoneInfo) {
        this.zoneInfo = zoneInfo;
        return this;
    }
}