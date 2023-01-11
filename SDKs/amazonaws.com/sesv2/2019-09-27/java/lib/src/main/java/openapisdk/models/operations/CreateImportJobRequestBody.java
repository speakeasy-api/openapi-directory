package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateImportJobRequestBody {
    @JsonProperty("ImportDataSource")
    public CreateImportJobRequestBodyImportDataSource importDataSource;
    public CreateImportJobRequestBody withImportDataSource(CreateImportJobRequestBodyImportDataSource importDataSource) {
        this.importDataSource = importDataSource;
        return this;
    }
    @JsonProperty("ImportDestination")
    public CreateImportJobRequestBodyImportDestination importDestination;
    public CreateImportJobRequestBody withImportDestination(CreateImportJobRequestBodyImportDestination importDestination) {
        this.importDestination = importDestination;
        return this;
    }
}