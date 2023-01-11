package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTableMetadataOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableMetadata")
    public TableMetadata tableMetadata;
    public GetTableMetadataOutput withTableMetadata(TableMetadata tableMetadata) {
        this.tableMetadata = tableMetadata;
        return this;
    }
}