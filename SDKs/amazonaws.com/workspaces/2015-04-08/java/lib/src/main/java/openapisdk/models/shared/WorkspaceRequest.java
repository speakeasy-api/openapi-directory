package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkspaceRequest
 * Describes the information used to create a WorkSpace.
**/
public class WorkspaceRequest {
    @JsonProperty("BundleId")
    public String bundleId;
    public WorkspaceRequest withBundleId(String bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @JsonProperty("DirectoryId")
    public String directoryId;
    public WorkspaceRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RootVolumeEncryptionEnabled")
    public Boolean rootVolumeEncryptionEnabled;
    public WorkspaceRequest withRootVolumeEncryptionEnabled(Boolean rootVolumeEncryptionEnabled) {
        this.rootVolumeEncryptionEnabled = rootVolumeEncryptionEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public WorkspaceRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("UserName")
    public String userName;
    public WorkspaceRequest withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserVolumeEncryptionEnabled")
    public Boolean userVolumeEncryptionEnabled;
    public WorkspaceRequest withUserVolumeEncryptionEnabled(Boolean userVolumeEncryptionEnabled) {
        this.userVolumeEncryptionEnabled = userVolumeEncryptionEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VolumeEncryptionKey")
    public String volumeEncryptionKey;
    public WorkspaceRequest withVolumeEncryptionKey(String volumeEncryptionKey) {
        this.volumeEncryptionKey = volumeEncryptionKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkspaceProperties")
    public WorkspaceProperties workspaceProperties;
    public WorkspaceRequest withWorkspaceProperties(WorkspaceProperties workspaceProperties) {
        this.workspaceProperties = workspaceProperties;
        return this;
    }
}