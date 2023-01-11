package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * GetDestroyWithAssociatedResourcesStatus200ApplicationJson
 * An objects containing information about a resources scheduled for deletion.
**/
public class GetDestroyWithAssociatedResourcesStatus200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("completed_at")
    public OffsetDateTime completedAt;
    public GetDestroyWithAssociatedResourcesStatus200ApplicationJson withCompletedAt(OffsetDateTime completedAt) {
        this.completedAt = completedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droplet")
    public GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet droplet;
    public GetDestroyWithAssociatedResourcesStatus200ApplicationJson withDroplet(GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet droplet) {
        this.droplet = droplet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failures")
    public Long failures;
    public GetDestroyWithAssociatedResourcesStatus200ApplicationJson withFailures(Long failures) {
        this.failures = failures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources resources;
    public GetDestroyWithAssociatedResourcesStatus200ApplicationJson withResources(GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources resources) {
        this.resources = resources;
        return this;
    }
}