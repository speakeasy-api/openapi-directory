package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NotificationRelationshipsResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public NotificationRelationshipsResourceData data;
    public NotificationRelationshipsResource withData(NotificationRelationshipsResourceData data) {
        this.data = data;
        return this;
    }
}