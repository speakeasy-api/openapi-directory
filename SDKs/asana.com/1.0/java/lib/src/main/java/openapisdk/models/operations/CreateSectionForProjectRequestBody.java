package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSectionForProjectRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.SectionRequest data;
    public CreateSectionForProjectRequestBody withData(openapisdk.models.shared.SectionRequest data) {
        this.data = data;
        return this;
    }
}