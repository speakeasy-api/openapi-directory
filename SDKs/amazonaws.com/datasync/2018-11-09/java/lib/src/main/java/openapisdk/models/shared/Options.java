package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Options
 * <p>Represents the options that are available to control the behavior of a <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a> operation. Behavior includes preserving metadata such as user ID (UID), group ID (GID), and file permissions, and also overwriting files in the destination, data integrity verification, and so on.</p> <p>A task has a set of default options associated with it. If you don't specify an option in <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>, the default value is used. You can override the defaults options on each task execution by specifying an overriding <code>Options</code> value to <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html">StartTaskExecution</a>.</p>
**/
public class Options {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Atime")
    public AtimeEnum atime;
    public Options withAtime(AtimeEnum atime) {
        this.atime = atime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BytesPerSecond")
    public Long bytesPerSecond;
    public Options withBytesPerSecond(Long bytesPerSecond) {
        this.bytesPerSecond = bytesPerSecond;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Gid")
    public GidEnum gid;
    public Options withGid(GidEnum gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogLevel")
    public LogLevelEnum logLevel;
    public Options withLogLevel(LogLevelEnum logLevel) {
        this.logLevel = logLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mtime")
    public MtimeEnum mtime;
    public Options withMtime(MtimeEnum mtime) {
        this.mtime = mtime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OverwriteMode")
    public OverwriteModeEnum overwriteMode;
    public Options withOverwriteMode(OverwriteModeEnum overwriteMode) {
        this.overwriteMode = overwriteMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PosixPermissions")
    public PosixPermissionsEnum posixPermissions;
    public Options withPosixPermissions(PosixPermissionsEnum posixPermissions) {
        this.posixPermissions = posixPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreserveDeletedFiles")
    public PreserveDeletedFilesEnum preserveDeletedFiles;
    public Options withPreserveDeletedFiles(PreserveDeletedFilesEnum preserveDeletedFiles) {
        this.preserveDeletedFiles = preserveDeletedFiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreserveDevices")
    public PreserveDevicesEnum preserveDevices;
    public Options withPreserveDevices(PreserveDevicesEnum preserveDevices) {
        this.preserveDevices = preserveDevices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityDescriptorCopyFlags")
    public SmbSecurityDescriptorCopyFlagsEnum securityDescriptorCopyFlags;
    public Options withSecurityDescriptorCopyFlags(SmbSecurityDescriptorCopyFlagsEnum securityDescriptorCopyFlags) {
        this.securityDescriptorCopyFlags = securityDescriptorCopyFlags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaskQueueing")
    public TaskQueueingEnum taskQueueing;
    public Options withTaskQueueing(TaskQueueingEnum taskQueueing) {
        this.taskQueueing = taskQueueing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransferMode")
    public TransferModeEnum transferMode;
    public Options withTransferMode(TransferModeEnum transferMode) {
        this.transferMode = transferMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Uid")
    public UidEnum uid;
    public Options withUid(UidEnum uid) {
        this.uid = uid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VerifyMode")
    public VerifyModeEnum verifyMode;
    public Options withVerifyMode(VerifyModeEnum verifyMode) {
        this.verifyMode = verifyMode;
        return this;
    }
}