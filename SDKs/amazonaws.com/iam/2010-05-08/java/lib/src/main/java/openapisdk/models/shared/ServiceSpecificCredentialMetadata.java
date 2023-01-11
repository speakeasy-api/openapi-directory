package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * ServiceSpecificCredentialMetadata
 * Contains additional details about a service-specific credential.
**/
public class ServiceSpecificCredentialMetadata {
    public OffsetDateTime createDate;
    public ServiceSpecificCredentialMetadata withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    public String serviceName;
    public ServiceSpecificCredentialMetadata withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    public String serviceSpecificCredentialId;
    public ServiceSpecificCredentialMetadata withServiceSpecificCredentialId(String serviceSpecificCredentialId) {
        this.serviceSpecificCredentialId = serviceSpecificCredentialId;
        return this;
    }
    public String serviceUserName;
    public ServiceSpecificCredentialMetadata withServiceUserName(String serviceUserName) {
        this.serviceUserName = serviceUserName;
        return this;
    }
    public StatusTypeEnum status;
    public ServiceSpecificCredentialMetadata withStatus(StatusTypeEnum status) {
        this.status = status;
        return this;
    }
    public String userName;
    public ServiceSpecificCredentialMetadata withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}