package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteStepDetails
 * The name of the step, used to identify the step that is being deleted.
**/
public class DeleteStepDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public DeleteStepDetails withName(String name) {
        this.name = name;
        return this;
    }
}