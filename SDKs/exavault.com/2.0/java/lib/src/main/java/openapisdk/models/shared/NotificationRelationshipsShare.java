package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NotificationRelationshipsShare {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public NotificationRelationshipsShareData data;
    public NotificationRelationshipsShare withData(NotificationRelationshipsShareData data) {
        this.data = data;
        return this;
    }
}