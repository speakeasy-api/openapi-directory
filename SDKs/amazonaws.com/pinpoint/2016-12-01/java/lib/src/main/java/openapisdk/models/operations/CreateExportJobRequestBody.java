package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateExportJobRequestBody {
    @JsonProperty("ExportJobRequest")
    public CreateExportJobRequestBodyExportJobRequest exportJobRequest;
    public CreateExportJobRequestBody withExportJobRequest(CreateExportJobRequestBodyExportJobRequest exportJobRequest) {
        this.exportJobRequest = exportJobRequest;
        return this;
    }
}