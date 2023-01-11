package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTableRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public CreateTableRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public CreateTableRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PartitionIndexes")
    public PartitionIndex[] partitionIndexes;
    public CreateTableRequest withPartitionIndexes(PartitionIndex[] partitionIndexes) {
        this.partitionIndexes = partitionIndexes;
        return this;
    }
    @JsonProperty("TableInput")
    public TableInput tableInput;
    public CreateTableRequest withTableInput(TableInput tableInput) {
        this.tableInput = tableInput;
        return this;
    }
}