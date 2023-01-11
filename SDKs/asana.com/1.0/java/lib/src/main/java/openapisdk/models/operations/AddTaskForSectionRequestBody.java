package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddTaskForSectionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.SectionTaskInsertRequest data;
    public AddTaskForSectionRequestBody withData(openapisdk.models.shared.SectionTaskInsertRequest data) {
        this.data = data;
        return this;
    }
}