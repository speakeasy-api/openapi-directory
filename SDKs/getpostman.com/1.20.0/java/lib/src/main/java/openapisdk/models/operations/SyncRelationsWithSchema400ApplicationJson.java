package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SyncRelationsWithSchema400ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public SyncRelationsWithSchema400ApplicationJsonError error;
    public SyncRelationsWithSchema400ApplicationJson withError(SyncRelationsWithSchema400ApplicationJsonError error) {
        this.error = error;
        return this;
    }
}