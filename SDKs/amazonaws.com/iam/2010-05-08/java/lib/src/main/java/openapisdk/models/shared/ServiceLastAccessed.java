package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * ServiceLastAccessed
 * <p>Contains details about the most recent attempt to access the service.</p> <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p>
**/
public class ServiceLastAccessed {
    public OffsetDateTime lastAuthenticated;
    public ServiceLastAccessed withLastAuthenticated(OffsetDateTime lastAuthenticated) {
        this.lastAuthenticated = lastAuthenticated;
        return this;
    }
    public String lastAuthenticatedEntity;
    public ServiceLastAccessed withLastAuthenticatedEntity(String lastAuthenticatedEntity) {
        this.lastAuthenticatedEntity = lastAuthenticatedEntity;
        return this;
    }
    public String lastAuthenticatedRegion;
    public ServiceLastAccessed withLastAuthenticatedRegion(String lastAuthenticatedRegion) {
        this.lastAuthenticatedRegion = lastAuthenticatedRegion;
        return this;
    }
    public String serviceName;
    public ServiceLastAccessed withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    public String serviceNamespace;
    public ServiceLastAccessed withServiceNamespace(String serviceNamespace) {
        this.serviceNamespace = serviceNamespace;
        return this;
    }
    public Long totalAuthenticatedEntities;
    public ServiceLastAccessed withTotalAuthenticatedEntities(Long totalAuthenticatedEntities) {
        this.totalAuthenticatedEntities = totalAuthenticatedEntities;
        return this;
    }
    public TrackedActionLastAccessed[] trackedActionsLastAccessed;
    public ServiceLastAccessed withTrackedActionsLastAccessed(TrackedActionLastAccessed[] trackedActionsLastAccessed) {
        this.trackedActionsLastAccessed = trackedActionsLastAccessed;
        return this;
    }
}