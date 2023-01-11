package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartImportTaskResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task")
    public ImportTask task;
    public StartImportTaskResponse withTask(ImportTask task) {
        this.task = task;
        return this;
    }
}