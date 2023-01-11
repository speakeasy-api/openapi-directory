package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMountTargetRequestBody {
    @JsonProperty("FileSystemId")
    public String fileSystemId;
    public CreateMountTargetRequestBody withFileSystemId(String fileSystemId) {
        this.fileSystemId = fileSystemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpAddress")
    public String ipAddress;
    public CreateMountTargetRequestBody withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroups")
    public String[] securityGroups;
    public CreateMountTargetRequestBody withSecurityGroups(String[] securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
    @JsonProperty("SubnetId")
    public String subnetId;
    public CreateMountTargetRequestBody withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
}