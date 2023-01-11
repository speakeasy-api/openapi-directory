package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeprecateThingTypeRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("undoDeprecate")
    public Boolean undoDeprecate;
    public DeprecateThingTypeRequestBody withUndoDeprecate(Boolean undoDeprecate) {
        this.undoDeprecate = undoDeprecate;
        return this;
    }
}