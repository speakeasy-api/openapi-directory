package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeConditionalForwardersRequest
 * Describes a conditional forwarder.
**/
public class DescribeConditionalForwardersRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public DescribeConditionalForwardersRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemoteDomainNames")
    public String[] remoteDomainNames;
    public DescribeConditionalForwardersRequest withRemoteDomainNames(String[] remoteDomainNames) {
        this.remoteDomainNames = remoteDomainNames;
        return this;
    }
}