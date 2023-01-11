package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResourceRelationships {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directFile")
    public ResourceRelationshipsDirectFile directFile;
    public ResourceRelationships withDirectFile(ResourceRelationshipsDirectFile directFile) {
        this.directFile = directFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notifications")
    public ResourceRelationshipsNotifications[] notifications;
    public ResourceRelationships withNotifications(ResourceRelationshipsNotifications[] notifications) {
        this.notifications = notifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentResource")
    public ResourceRelationshipsParentResource parentResource;
    public ResourceRelationships withParentResource(ResourceRelationshipsParentResource parentResource) {
        this.parentResource = parentResource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share")
    public ResourceRelationshipsShare share;
    public ResourceRelationships withShare(ResourceRelationshipsShare share) {
        this.share = share;
        return this;
    }
}