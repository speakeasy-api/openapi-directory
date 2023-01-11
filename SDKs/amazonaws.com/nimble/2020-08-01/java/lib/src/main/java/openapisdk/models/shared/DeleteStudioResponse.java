package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteStudioResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("studio")
    public Studio studio;
    public DeleteStudioResponse withStudio(Studio studio) {
        this.studio = studio;
        return this;
    }
}