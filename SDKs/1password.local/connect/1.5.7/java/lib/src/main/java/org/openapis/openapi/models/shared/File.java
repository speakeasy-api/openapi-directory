/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * File - OK
 */
public class File {
    /**
     * Base64-encoded contents of the file. Only set if size &lt;= OP_MAX_INLINE_FILE_SIZE_KB kb and `inline_files` is set to `true`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;

    public File withContent(String content) {
        this.content = content;
        return this;
    }
    
    /**
     * Path of the Connect API that can be used to download the contents of this file.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_path")
    public String contentPath;

    public File withContentPath(String contentPath) {
        this.contentPath = contentPath;
        return this;
    }
    
    /**
     * ID of the file
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public File withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * Name of the file
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public File withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * For files that are in a section, this field describes the section.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("section")
    public FileSection section;

    public File withSection(FileSection section) {
        this.section = section;
        return this;
    }
    
    /**
     * Size in bytes of the file
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;

    public File withSize(Long size) {
        this.size = size;
        return this;
    }
    
    public File(){}
}
