package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ActivityTypeDetail
 * Detailed information about an activity type.
**/
public class ActivityTypeDetail {
    @JsonProperty("configuration")
    public ActivityTypeConfiguration configuration;
    public ActivityTypeDetail withConfiguration(ActivityTypeConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonProperty("typeInfo")
    public ActivityTypeInfo typeInfo;
    public ActivityTypeDetail withTypeInfo(ActivityTypeInfo typeInfo) {
        this.typeInfo = typeInfo;
        return this;
    }
}