package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * AccessDetail
 * <p>An object that contains details about when a principal in the reported Organizations entity last attempted to access an Amazon Web Services service. A principal can be an IAM user, an IAM role, or the Amazon Web Services account root user within the reported Organizations entity.</p> <p>This data type is a response element in the <a>GetOrganizationsAccessReport</a> operation.</p>
**/
public class AccessDetail {
    public String entityPath;
    public AccessDetail withEntityPath(String entityPath) {
        this.entityPath = entityPath;
        return this;
    }
    public OffsetDateTime lastAuthenticatedTime;
    public AccessDetail withLastAuthenticatedTime(OffsetDateTime lastAuthenticatedTime) {
        this.lastAuthenticatedTime = lastAuthenticatedTime;
        return this;
    }
    public String region;
    public AccessDetail withRegion(String region) {
        this.region = region;
        return this;
    }
    public String serviceName;
    public AccessDetail withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    public String serviceNamespace;
    public AccessDetail withServiceNamespace(String serviceNamespace) {
        this.serviceNamespace = serviceNamespace;
        return this;
    }
    public Long totalAuthenticatedEntities;
    public AccessDetail withTotalAuthenticatedEntities(Long totalAuthenticatedEntities) {
        this.totalAuthenticatedEntities = totalAuthenticatedEntities;
        return this;
    }
}