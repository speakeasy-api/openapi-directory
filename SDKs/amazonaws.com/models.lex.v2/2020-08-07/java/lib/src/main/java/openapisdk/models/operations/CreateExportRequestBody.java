package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateExportRequestBody {
    @JsonProperty("fileFormat")
    public CreateExportRequestBodyFileFormatEnum fileFormat;
    public CreateExportRequestBody withFileFormat(CreateExportRequestBodyFileFormatEnum fileFormat) {
        this.fileFormat = fileFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filePassword")
    public String filePassword;
    public CreateExportRequestBody withFilePassword(String filePassword) {
        this.filePassword = filePassword;
        return this;
    }
    @JsonProperty("resourceSpecification")
    public CreateExportRequestBodyResourceSpecification resourceSpecification;
    public CreateExportRequestBody withResourceSpecification(CreateExportRequestBodyResourceSpecification resourceSpecification) {
        this.resourceSpecification = resourceSpecification;
        return this;
    }
}