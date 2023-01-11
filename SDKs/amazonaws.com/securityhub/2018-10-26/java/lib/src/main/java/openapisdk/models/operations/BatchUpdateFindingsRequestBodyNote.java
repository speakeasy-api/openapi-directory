package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUpdateFindingsRequestBodyNote
 * The updated note.
**/
public class BatchUpdateFindingsRequestBodyNote {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Text")
    public String text;
    public BatchUpdateFindingsRequestBodyNote withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedBy")
    public String updatedBy;
    public BatchUpdateFindingsRequestBodyNote withUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
}