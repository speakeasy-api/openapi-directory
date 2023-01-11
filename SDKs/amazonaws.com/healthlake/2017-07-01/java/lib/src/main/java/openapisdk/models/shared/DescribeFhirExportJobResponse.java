package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeFhirExportJobResponse {
    @JsonProperty("ExportJobProperties")
    public ExportJobProperties exportJobProperties;
    public DescribeFhirExportJobResponse withExportJobProperties(ExportJobProperties exportJobProperties) {
        this.exportJobProperties = exportJobProperties;
        return this;
    }
}