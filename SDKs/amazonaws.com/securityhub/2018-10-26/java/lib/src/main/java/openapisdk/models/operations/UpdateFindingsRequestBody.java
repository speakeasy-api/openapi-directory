package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFindingsRequestBody {
    @JsonProperty("Filters")
    public UpdateFindingsRequestBodyFilters filters;
    public UpdateFindingsRequestBody withFilters(UpdateFindingsRequestBodyFilters filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Note")
    public UpdateFindingsRequestBodyNote note;
    public UpdateFindingsRequestBody withNote(UpdateFindingsRequestBodyNote note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecordState")
    public UpdateFindingsRequestBodyRecordStateEnum recordState;
    public UpdateFindingsRequestBody withRecordState(UpdateFindingsRequestBodyRecordStateEnum recordState) {
        this.recordState = recordState;
        return this;
    }
}