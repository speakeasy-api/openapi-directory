package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateRadiusRequest
 * Contains the inputs for the <a>UpdateRadius</a> operation.
**/
public class UpdateRadiusRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public UpdateRadiusRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonProperty("RadiusSettings")
    public RadiusSettings radiusSettings;
    public UpdateRadiusRequest withRadiusSettings(RadiusSettings radiusSettings) {
        this.radiusSettings = radiusSettings;
        return this;
    }
}