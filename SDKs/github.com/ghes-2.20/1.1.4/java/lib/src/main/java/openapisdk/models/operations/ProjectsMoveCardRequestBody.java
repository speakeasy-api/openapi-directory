package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectsMoveCardRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("column_id")
    public Long columnId;
    public ProjectsMoveCardRequestBody withColumnId(Long columnId) {
        this.columnId = columnId;
        return this;
    }
    @JsonProperty("position")
    public String position;
    public ProjectsMoveCardRequestBody withPosition(String position) {
        this.position = position;
        return this;
    }
}