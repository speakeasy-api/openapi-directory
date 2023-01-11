package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ListProjectResources200ApplicationJsonResources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("assigned_at")
    public OffsetDateTime assignedAt;
    public ListProjectResources200ApplicationJsonResources withAssignedAt(OffsetDateTime assignedAt) {
        this.assignedAt = assignedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListProjectResources200ApplicationJsonResourcesLinks links;
    public ListProjectResources200ApplicationJsonResources withLinks(ListProjectResources200ApplicationJsonResourcesLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ListProjectResources200ApplicationJsonResourcesStatusEnum status;
    public ListProjectResources200ApplicationJsonResources withStatus(ListProjectResources200ApplicationJsonResourcesStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urn")
    public String urn;
    public ListProjectResources200ApplicationJsonResources withUrn(String urn) {
        this.urn = urn;
        return this;
    }
}