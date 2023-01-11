package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InsertSectionForProjectRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.ProjectSectionInsertRequest data;
    public InsertSectionForProjectRequestBody withData(openapisdk.models.shared.ProjectSectionInsertRequest data) {
        this.data = data;
        return this;
    }
}