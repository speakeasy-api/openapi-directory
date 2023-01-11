package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportTaskProgressInput
 * Contains the parameters for ReportTaskProgress.
**/
public class ReportTaskProgressInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public Field[] fields;
    public ReportTaskProgressInput withFields(Field[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonProperty("taskId")
    public String taskId;
    public ReportTaskProgressInput withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}