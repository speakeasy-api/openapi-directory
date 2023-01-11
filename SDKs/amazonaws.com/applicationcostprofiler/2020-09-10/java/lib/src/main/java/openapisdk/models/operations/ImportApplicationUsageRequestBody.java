package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ImportApplicationUsageRequestBody {
    @JsonProperty("sourceS3Location")
    public ImportApplicationUsageRequestBodySourceS3Location sourceS3Location;
    public ImportApplicationUsageRequestBody withSourceS3Location(ImportApplicationUsageRequestBodySourceS3Location sourceS3Location) {
        this.sourceS3Location = sourceS3Location;
        return this;
    }
}