package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ActionRevision
 * Represents information about the version (or revision) of an action.
**/
public class ActionRevision {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public ActionRevision withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonProperty("revisionChangeId")
    public String revisionChangeId;
    public ActionRevision withRevisionChangeId(String revisionChangeId) {
        this.revisionChangeId = revisionChangeId;
        return this;
    }
    @JsonProperty("revisionId")
    public String revisionId;
    public ActionRevision withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}