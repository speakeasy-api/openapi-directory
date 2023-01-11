package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * CurrentRevision
 * Represents information about a current revision.
**/
public class CurrentRevision {
    @JsonProperty("changeIdentifier")
    public String changeIdentifier;
    public CurrentRevision withChangeIdentifier(String changeIdentifier) {
        this.changeIdentifier = changeIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public CurrentRevision withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonProperty("revision")
    public String revision;
    public CurrentRevision withRevision(String revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionSummary")
    public String revisionSummary;
    public CurrentRevision withRevisionSummary(String revisionSummary) {
        this.revisionSummary = revisionSummary;
        return this;
    }
}