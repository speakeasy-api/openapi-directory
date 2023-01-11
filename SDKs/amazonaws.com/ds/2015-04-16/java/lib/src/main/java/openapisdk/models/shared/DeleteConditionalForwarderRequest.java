package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteConditionalForwarderRequest
 * Deletes a conditional forwarder.
**/
public class DeleteConditionalForwarderRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public DeleteConditionalForwarderRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonProperty("RemoteDomainName")
    public String remoteDomainName;
    public DeleteConditionalForwarderRequest withRemoteDomainName(String remoteDomainName) {
        this.remoteDomainName = remoteDomainName;
        return this;
    }
}