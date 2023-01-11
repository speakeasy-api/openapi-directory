package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * TrackedActionLastAccessed
 * <p>Contains details about the most recent attempt to access an action within the service.</p> <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p>
**/
public class TrackedActionLastAccessed {
    public String actionName;
    public TrackedActionLastAccessed withActionName(String actionName) {
        this.actionName = actionName;
        return this;
    }
    public String lastAccessedEntity;
    public TrackedActionLastAccessed withLastAccessedEntity(String lastAccessedEntity) {
        this.lastAccessedEntity = lastAccessedEntity;
        return this;
    }
    public String lastAccessedRegion;
    public TrackedActionLastAccessed withLastAccessedRegion(String lastAccessedRegion) {
        this.lastAccessedRegion = lastAccessedRegion;
        return this;
    }
    public OffsetDateTime lastAccessedTime;
    public TrackedActionLastAccessed withLastAccessedTime(OffsetDateTime lastAccessedTime) {
        this.lastAccessedTime = lastAccessedTime;
        return this;
    }
}