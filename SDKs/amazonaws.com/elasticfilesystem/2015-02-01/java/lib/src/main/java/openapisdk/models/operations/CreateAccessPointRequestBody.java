package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAccessPointRequestBody {
    @JsonProperty("ClientToken")
    public String clientToken;
    public CreateAccessPointRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("FileSystemId")
    public String fileSystemId;
    public CreateAccessPointRequestBody withFileSystemId(String fileSystemId) {
        this.fileSystemId = fileSystemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PosixUser")
    public CreateAccessPointRequestBodyPosixUser posixUser;
    public CreateAccessPointRequestBody withPosixUser(CreateAccessPointRequestBodyPosixUser posixUser) {
        this.posixUser = posixUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RootDirectory")
    public CreateAccessPointRequestBodyRootDirectory rootDirectory;
    public CreateAccessPointRequestBody withRootDirectory(CreateAccessPointRequestBodyRootDirectory rootDirectory) {
        this.rootDirectory = rootDirectory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateAccessPointRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}