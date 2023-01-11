package openapisdk.models.shared;



/**
 * DbClusterMemberList
 * Contains information about an instance that is part of a cluster.
**/
public class DbClusterMemberList {
    public String dbClusterParameterGroupStatus;
    public DbClusterMemberList withDbClusterParameterGroupStatus(String dbClusterParameterGroupStatus) {
        this.dbClusterParameterGroupStatus = dbClusterParameterGroupStatus;
        return this;
    }
    public String dbInstanceIdentifier;
    public DbClusterMemberList withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    public Boolean isClusterWriter;
    public DbClusterMemberList withIsClusterWriter(Boolean isClusterWriter) {
        this.isClusterWriter = isClusterWriter;
        return this;
    }
    public Long promotionTier;
    public DbClusterMemberList withPromotionTier(Long promotionTier) {
        this.promotionTier = promotionTier;
        return this;
    }
}