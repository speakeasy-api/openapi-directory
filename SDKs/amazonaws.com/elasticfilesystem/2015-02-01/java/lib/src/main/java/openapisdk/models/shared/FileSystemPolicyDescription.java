package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FileSystemPolicyDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FileSystemId")
    public String fileSystemId;
    public FileSystemPolicyDescription withFileSystemId(String fileSystemId) {
        this.fileSystemId = fileSystemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Policy")
    public String policy;
    public FileSystemPolicyDescription withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
}