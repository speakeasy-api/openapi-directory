/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FileSystemConfig - The Amazon Elastic File System (EFS) storage configuration for a SageMaker image.
 */
public class FileSystemConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultGid")
    public Long defaultGid;

    public FileSystemConfig withDefaultGid(Long defaultGid) {
        this.defaultGid = defaultGid;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultUid")
    public Long defaultUid;

    public FileSystemConfig withDefaultUid(Long defaultUid) {
        this.defaultUid = defaultUid;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MountPath")
    public String mountPath;

    public FileSystemConfig withMountPath(String mountPath) {
        this.mountPath = mountPath;
        return this;
    }
    
    public FileSystemConfig(){}
}
