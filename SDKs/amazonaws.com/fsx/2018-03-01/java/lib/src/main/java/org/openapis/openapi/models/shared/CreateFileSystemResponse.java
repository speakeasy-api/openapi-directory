/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateFileSystemResponse - The response object returned after the file system is created.
 */
public class CreateFileSystemResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FileSystem")
    public FileSystem fileSystem;

    public CreateFileSystemResponse withFileSystem(FileSystem fileSystem) {
        this.fileSystem = fileSystem;
        return this;
    }
    
    public CreateFileSystemResponse(){}
}
