package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ListDefaultProjectResources200ApplicationJsonResources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("assigned_at")
    public OffsetDateTime assignedAt;
    public ListDefaultProjectResources200ApplicationJsonResources withAssignedAt(OffsetDateTime assignedAt) {
        this.assignedAt = assignedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListDefaultProjectResources200ApplicationJsonResourcesLinks links;
    public ListDefaultProjectResources200ApplicationJsonResources withLinks(ListDefaultProjectResources200ApplicationJsonResourcesLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ListDefaultProjectResources200ApplicationJsonResourcesStatusEnum status;
    public ListDefaultProjectResources200ApplicationJsonResources withStatus(ListDefaultProjectResources200ApplicationJsonResourcesStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urn")
    public String urn;
    public ListDefaultProjectResources200ApplicationJsonResources withUrn(String urn) {
        this.urn = urn;
        return this;
    }
}