package openapisdk.models.operations;



public class GetSettingsChangesResponse {
    public String contentType;
    public GetSettingsChangesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SettingsChangeEntity[] settingsChangeEntities;
    public GetSettingsChangesResponse withSettingsChangeEntities(openapisdk.models.shared.SettingsChangeEntity[] settingsChangeEntities) {
        this.settingsChangeEntities = settingsChangeEntities;
        return this;
    }
    public Long statusCode;
    public GetSettingsChangesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}