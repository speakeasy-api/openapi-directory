package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateFindingsRequestBodyNote
 * The updated note.
**/
public class UpdateFindingsRequestBodyNote {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Text")
    public String text;
    public UpdateFindingsRequestBodyNote withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedBy")
    public String updatedBy;
    public UpdateFindingsRequestBodyNote withUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
}