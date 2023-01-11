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
 * ArtifactRevision
 * Represents revision details of an artifact. 
**/
public class ArtifactRevision {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public ArtifactRevision withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ArtifactRevision withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionChangeIdentifier")
    public String revisionChangeIdentifier;
    public ArtifactRevision withRevisionChangeIdentifier(String revisionChangeIdentifier) {
        this.revisionChangeIdentifier = revisionChangeIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;
    public ArtifactRevision withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionSummary")
    public String revisionSummary;
    public ArtifactRevision withRevisionSummary(String revisionSummary) {
        this.revisionSummary = revisionSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionUrl")
    public String revisionUrl;
    public ArtifactRevision withRevisionUrl(String revisionUrl) {
        this.revisionUrl = revisionUrl;
        return this;
    }
}