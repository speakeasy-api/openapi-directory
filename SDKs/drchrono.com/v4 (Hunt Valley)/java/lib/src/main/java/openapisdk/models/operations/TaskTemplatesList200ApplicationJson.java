package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskTemplatesList200ApplicationJson
 * Paginated Result
**/
public class TaskTemplatesList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TaskTemplate[] data;
    public TaskTemplatesList200ApplicationJson withData(openapisdk.models.shared.TaskTemplate[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public TaskTemplatesList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public TaskTemplatesList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}