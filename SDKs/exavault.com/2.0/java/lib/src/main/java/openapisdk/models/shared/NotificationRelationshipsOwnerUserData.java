package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NotificationRelationshipsOwnerUserData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public NotificationRelationshipsOwnerUserData withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public NotificationRelationshipsOwnerUserDataTypeEnum type;
    public NotificationRelationshipsOwnerUserData withType(NotificationRelationshipsOwnerUserDataTypeEnum type) {
        this.type = type;
        return this;
    }
}