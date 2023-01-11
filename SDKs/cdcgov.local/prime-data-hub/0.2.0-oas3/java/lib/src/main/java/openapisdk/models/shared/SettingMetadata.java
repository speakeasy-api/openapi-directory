package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SettingMetadata
 * The metadata associated with an setting
**/
public class SettingMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdAt")
    public String createdAt;
    public SettingMetadata withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public String createdBy;
    public SettingMetadata withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Double version;
    public SettingMetadata withVersion(Double version) {
        this.version = version;
        return this;
    }
}