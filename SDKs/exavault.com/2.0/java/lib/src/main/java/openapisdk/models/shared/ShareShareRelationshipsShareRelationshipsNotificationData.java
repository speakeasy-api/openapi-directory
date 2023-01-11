package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ShareShareRelationshipsShareRelationshipsNotificationData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ShareShareRelationshipsShareRelationshipsNotificationData withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ShareShareRelationshipsShareRelationshipsNotificationDataTypeEnum type;
    public ShareShareRelationshipsShareRelationshipsNotificationData withType(ShareShareRelationshipsShareRelationshipsNotificationDataTypeEnum type) {
        this.type = type;
        return this;
    }
}