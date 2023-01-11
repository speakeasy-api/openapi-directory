package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PreloadDataConfig
 *  The input properties for the preloaded Data Store. Only data preloaded from Synthea is supported.
**/
public class PreloadDataConfig {
    @JsonProperty("PreloadDataType")
    public PreloadDataTypeEnum preloadDataType;
    public PreloadDataConfig withPreloadDataType(PreloadDataTypeEnum preloadDataType) {
        this.preloadDataType = preloadDataType;
        return this;
    }
}