package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * DbClusterBacktrackList
 * This data type is used as a response element in the <code>DescribeDBClusterBacktracks</code> action.
**/
public class DbClusterBacktrackList {
    public String backtrackIdentifier;
    public DbClusterBacktrackList withBacktrackIdentifier(String backtrackIdentifier) {
        this.backtrackIdentifier = backtrackIdentifier;
        return this;
    }
    public OffsetDateTime backtrackRequestCreationTime;
    public DbClusterBacktrackList withBacktrackRequestCreationTime(OffsetDateTime backtrackRequestCreationTime) {
        this.backtrackRequestCreationTime = backtrackRequestCreationTime;
        return this;
    }
    public OffsetDateTime backtrackTo;
    public DbClusterBacktrackList withBacktrackTo(OffsetDateTime backtrackTo) {
        this.backtrackTo = backtrackTo;
        return this;
    }
    public OffsetDateTime backtrackedFrom;
    public DbClusterBacktrackList withBacktrackedFrom(OffsetDateTime backtrackedFrom) {
        this.backtrackedFrom = backtrackedFrom;
        return this;
    }
    public String dbClusterIdentifier;
    public DbClusterBacktrackList withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    public String status;
    public DbClusterBacktrackList withStatus(String status) {
        this.status = status;
        return this;
    }
}