package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutFileEntry
 * Information about a file added or updated as part of a commit.
**/
public class PutFileEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileContent")
    public String fileContent;
    public PutFileEntry withFileContent(String fileContent) {
        this.fileContent = fileContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileMode")
    public FileModeTypeEnumEnum fileMode;
    public PutFileEntry withFileMode(FileModeTypeEnumEnum fileMode) {
        this.fileMode = fileMode;
        return this;
    }
    @JsonProperty("filePath")
    public String filePath;
    public PutFileEntry withFilePath(String filePath) {
        this.filePath = filePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceFile")
    public SourceFileSpecifier sourceFile;
    public PutFileEntry withSourceFile(SourceFileSpecifier sourceFile) {
        this.sourceFile = sourceFile;
        return this;
    }
}