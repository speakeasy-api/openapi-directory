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
 * GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet
 * An object containing information about a resource scheduled for deletion.
**/
public class GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("destroyed_at")
    public OffsetDateTime destroyedAt;
    public GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet withDestroyedAt(OffsetDateTime destroyedAt) {
        this.destroyedAt = destroyedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_message")
    public String errorMessage;
    public GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet withName(String name) {
        this.name = name;
        return this;
    }
}