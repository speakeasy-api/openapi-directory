/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SetFileModeEntry - Information about the file mode changes.
 */
public class SetFileModeEntry {
    @JsonProperty("fileMode")
    public FileModeTypeEnumEnum fileMode;

    public SetFileModeEntry withFileMode(FileModeTypeEnumEnum fileMode) {
        this.fileMode = fileMode;
        return this;
    }
    
    @JsonProperty("filePath")
    public String filePath;

    public SetFileModeEntry withFilePath(String filePath) {
        this.filePath = filePath;
        return this;
    }
    
    public SetFileModeEntry(@JsonProperty("fileMode") FileModeTypeEnumEnum fileMode, @JsonProperty("filePath") String filePath) {
        this.fileMode = fileMode;
        this.filePath = filePath;
  }
}
