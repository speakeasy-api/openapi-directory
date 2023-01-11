package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * DbClusterBacktrack
 * This data type is used as a response element in the <code>DescribeDBClusterBacktracks</code> action.
**/
public class DbClusterBacktrack {
    public String backtrackIdentifier;
    public DbClusterBacktrack withBacktrackIdentifier(String backtrackIdentifier) {
        this.backtrackIdentifier = backtrackIdentifier;
        return this;
    }
    public OffsetDateTime backtrackRequestCreationTime;
    public DbClusterBacktrack withBacktrackRequestCreationTime(OffsetDateTime backtrackRequestCreationTime) {
        this.backtrackRequestCreationTime = backtrackRequestCreationTime;
        return this;
    }
    public OffsetDateTime backtrackTo;
    public DbClusterBacktrack withBacktrackTo(OffsetDateTime backtrackTo) {
        this.backtrackTo = backtrackTo;
        return this;
    }
    public OffsetDateTime backtrackedFrom;
    public DbClusterBacktrack withBacktrackedFrom(OffsetDateTime backtrackedFrom) {
        this.backtrackedFrom = backtrackedFrom;
        return this;
    }
    public String dbClusterIdentifier;
    public DbClusterBacktrack withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    public String status;
    public DbClusterBacktrack withStatus(String status) {
        this.status = status;
        return this;
    }
}