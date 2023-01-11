package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * SettingsChangeEntity
 * List Settings Changes
**/
public class SettingsChangeEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("change_details")
    public java.util.Map<String, Object> changeDetails;
    public SettingsChangeEntity withChangeDetails(java.util.Map<String, Object> changeDetails) {
        this.changeDetails = changeDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public SettingsChangeEntity withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public Integer userId;
    public SettingsChangeEntity withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}