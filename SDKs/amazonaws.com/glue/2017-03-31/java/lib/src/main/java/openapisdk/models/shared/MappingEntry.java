package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MappingEntry
 * Defines a mapping.
**/
public class MappingEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourcePath")
    public String sourcePath;
    public MappingEntry withSourcePath(String sourcePath) {
        this.sourcePath = sourcePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceTable")
    public String sourceTable;
    public MappingEntry withSourceTable(String sourceTable) {
        this.sourceTable = sourceTable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceType")
    public String sourceType;
    public MappingEntry withSourceType(String sourceType) {
        this.sourceType = sourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetPath")
    public String targetPath;
    public MappingEntry withTargetPath(String targetPath) {
        this.targetPath = targetPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetTable")
    public String targetTable;
    public MappingEntry withTargetTable(String targetTable) {
        this.targetTable = targetTable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetType")
    public String targetType;
    public MappingEntry withTargetType(String targetType) {
        this.targetType = targetType;
        return this;
    }
}