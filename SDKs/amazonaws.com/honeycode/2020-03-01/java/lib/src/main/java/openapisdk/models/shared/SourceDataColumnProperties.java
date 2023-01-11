package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SourceDataColumnProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnIndex")
    public Long columnIndex;
    public SourceDataColumnProperties withColumnIndex(Long columnIndex) {
        this.columnIndex = columnIndex;
        return this;
    }
}