package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTableVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableVersion")
    public TableVersion tableVersion;
    public GetTableVersionResponse withTableVersion(TableVersion tableVersion) {
        this.tableVersion = tableVersion;
        return this;
    }
}