package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EnableRadiusRequest
 * Contains the inputs for the <a>EnableRadius</a> operation.
**/
public class EnableRadiusRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public EnableRadiusRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonProperty("RadiusSettings")
    public RadiusSettings radiusSettings;
    public EnableRadiusRequest withRadiusSettings(RadiusSettings radiusSettings) {
        this.radiusSettings = radiusSettings;
        return this;
    }
}