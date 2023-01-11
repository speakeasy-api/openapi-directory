package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Note
 * A user-defined note added to a finding.
**/
public class Note {
    @JsonProperty("Text")
    public String text;
    public Note withText(String text) {
        this.text = text;
        return this;
    }
    @JsonProperty("UpdatedAt")
    public String updatedAt;
    public Note withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("UpdatedBy")
    public String updatedBy;
    public Note withUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
}