package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FSxWindowsFileServerVolumeConfiguration
 * <p>This parameter is specified when you are using <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html">Amazon FSx for Windows File Server</a> file system for task storage.</p> <p>For more information and the input format, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/wfsx-volumes.html">Amazon FSx for Windows File Server Volumes</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
**/
public class FSxWindowsFileServerVolumeConfiguration {
    @JsonProperty("authorizationConfig")
    public FSxWindowsFileServerAuthorizationConfig authorizationConfig;
    public FSxWindowsFileServerVolumeConfiguration withAuthorizationConfig(FSxWindowsFileServerAuthorizationConfig authorizationConfig) {
        this.authorizationConfig = authorizationConfig;
        return this;
    }
    @JsonProperty("fileSystemId")
    public String fileSystemId;
    public FSxWindowsFileServerVolumeConfiguration withFileSystemId(String fileSystemId) {
        this.fileSystemId = fileSystemId;
        return this;
    }
    @JsonProperty("rootDirectory")
    public String rootDirectory;
    public FSxWindowsFileServerVolumeConfiguration withRootDirectory(String rootDirectory) {
        this.rootDirectory = rootDirectory;
        return this;
    }
}