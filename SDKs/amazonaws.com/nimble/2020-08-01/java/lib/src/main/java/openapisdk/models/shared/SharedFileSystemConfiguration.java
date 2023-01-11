package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SharedFileSystemConfiguration
 * The configuration for a shared file storage system that is associated with a studio resource.
**/
public class SharedFileSystemConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoint")
    public String endpoint;
    public SharedFileSystemConfiguration withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileSystemId")
    public String fileSystemId;
    public SharedFileSystemConfiguration withFileSystemId(String fileSystemId) {
        this.fileSystemId = fileSystemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linuxMountPoint")
    public String linuxMountPoint;
    public SharedFileSystemConfiguration withLinuxMountPoint(String linuxMountPoint) {
        this.linuxMountPoint = linuxMountPoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shareName")
    public String shareName;
    public SharedFileSystemConfiguration withShareName(String shareName) {
        this.shareName = shareName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("windowsMountDrive")
    public String windowsMountDrive;
    public SharedFileSystemConfiguration withWindowsMountDrive(String windowsMountDrive) {
        this.windowsMountDrive = windowsMountDrive;
        return this;
    }
}