package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartImportRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filePassword")
    public String filePassword;
    public StartImportRequestBody withFilePassword(String filePassword) {
        this.filePassword = filePassword;
        return this;
    }
    @JsonProperty("importId")
    public String importId;
    public StartImportRequestBody withImportId(String importId) {
        this.importId = importId;
        return this;
    }
    @JsonProperty("mergeStrategy")
    public StartImportRequestBodyMergeStrategyEnum mergeStrategy;
    public StartImportRequestBody withMergeStrategy(StartImportRequestBodyMergeStrategyEnum mergeStrategy) {
        this.mergeStrategy = mergeStrategy;
        return this;
    }
    @JsonProperty("resourceSpecification")
    public StartImportRequestBodyResourceSpecification resourceSpecification;
    public StartImportRequestBody withResourceSpecification(StartImportRequestBodyResourceSpecification resourceSpecification) {
        this.resourceSpecification = resourceSpecification;
        return this;
    }
}