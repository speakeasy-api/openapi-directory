package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NotificationRelationships {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerUser")
    public NotificationRelationshipsOwnerUser ownerUser;
    public NotificationRelationships withOwnerUser(NotificationRelationshipsOwnerUser ownerUser) {
        this.ownerUser = ownerUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public NotificationRelationshipsResource resource;
    public NotificationRelationships withResource(NotificationRelationshipsResource resource) {
        this.resource = resource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share")
    public NotificationRelationshipsShare share;
    public NotificationRelationships withShare(NotificationRelationshipsShare share) {
        this.share = share;
        return this;
    }
}