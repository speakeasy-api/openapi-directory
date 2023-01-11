package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskCategoriesList200ApplicationJson
 * Paginated Result
**/
public class TaskCategoriesList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TaskCategory[] data;
    public TaskCategoriesList200ApplicationJson withData(openapisdk.models.shared.TaskCategory[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public TaskCategoriesList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public TaskCategoriesList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}