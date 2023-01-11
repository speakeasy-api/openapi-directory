package openapisdk.models.shared;



/**
 * DbClusterSnapshotAttributeList
 * <p>Contains the name and values of a manual DB cluster snapshot attribute.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon accounts to restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
**/
public class DbClusterSnapshotAttributeList {
    public String attributeName;
    public DbClusterSnapshotAttributeList withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    public java.util.Map<String, Object>[] attributeValues;
    public DbClusterSnapshotAttributeList withAttributeValues(java.util.Map<String, Object>[] attributeValues) {
        this.attributeValues = attributeValues;
        return this;
    }
}