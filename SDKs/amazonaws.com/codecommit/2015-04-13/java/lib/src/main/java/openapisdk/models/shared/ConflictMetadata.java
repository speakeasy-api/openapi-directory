package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConflictMetadata
 * Information about the metadata for a conflict in a merge operation.
**/
public class ConflictMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentConflict")
    public Boolean contentConflict;
    public ConflictMetadata withContentConflict(Boolean contentConflict) {
        this.contentConflict = contentConflict;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileModeConflict")
    public Boolean fileModeConflict;
    public ConflictMetadata withFileModeConflict(Boolean fileModeConflict) {
        this.fileModeConflict = fileModeConflict;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileModes")
    public FileModes fileModes;
    public ConflictMetadata withFileModes(FileModes fileModes) {
        this.fileModes = fileModes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filePath")
    public String filePath;
    public ConflictMetadata withFilePath(String filePath) {
        this.filePath = filePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileSizes")
    public FileSizes fileSizes;
    public ConflictMetadata withFileSizes(FileSizes fileSizes) {
        this.fileSizes = fileSizes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isBinaryFile")
    public IsBinaryFile isBinaryFile;
    public ConflictMetadata withIsBinaryFile(IsBinaryFile isBinaryFile) {
        this.isBinaryFile = isBinaryFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mergeOperations")
    public MergeOperations mergeOperations;
    public ConflictMetadata withMergeOperations(MergeOperations mergeOperations) {
        this.mergeOperations = mergeOperations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfConflicts")
    public Long numberOfConflicts;
    public ConflictMetadata withNumberOfConflicts(Long numberOfConflicts) {
        this.numberOfConflicts = numberOfConflicts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectTypeConflict")
    public Boolean objectTypeConflict;
    public ConflictMetadata withObjectTypeConflict(Boolean objectTypeConflict) {
        this.objectTypeConflict = objectTypeConflict;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectTypes")
    public ObjectTypes objectTypes;
    public ConflictMetadata withObjectTypes(ObjectTypes objectTypes) {
        this.objectTypes = objectTypes;
        return this;
    }
}