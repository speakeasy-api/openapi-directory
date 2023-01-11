package openapisdk.models.shared;



public class DbClusterCapacityInfo {
    public Long currentCapacity;
    public DbClusterCapacityInfo withCurrentCapacity(Long currentCapacity) {
        this.currentCapacity = currentCapacity;
        return this;
    }
    public String dbClusterIdentifier;
    public DbClusterCapacityInfo withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    public Long pendingCapacity;
    public DbClusterCapacityInfo withPendingCapacity(Long pendingCapacity) {
        this.pendingCapacity = pendingCapacity;
        return this;
    }
    public Long secondsBeforeTimeout;
    public DbClusterCapacityInfo withSecondsBeforeTimeout(Long secondsBeforeTimeout) {
        this.secondsBeforeTimeout = secondsBeforeTimeout;
        return this;
    }
    public String timeoutAction;
    public DbClusterCapacityInfo withTimeoutAction(String timeoutAction) {
        this.timeoutAction = timeoutAction;
        return this;
    }
}