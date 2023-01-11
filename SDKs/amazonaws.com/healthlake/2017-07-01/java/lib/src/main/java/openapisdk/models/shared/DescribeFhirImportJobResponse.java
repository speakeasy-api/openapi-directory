package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeFhirImportJobResponse {
    @JsonProperty("ImportJobProperties")
    public ImportJobProperties importJobProperties;
    public DescribeFhirImportJobResponse withImportJobProperties(ImportJobProperties importJobProperties) {
        this.importJobProperties = importJobProperties;
        return this;
    }
}