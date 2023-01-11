package openapisdk.models.shared;



/**
 * DbClusterSnapshotAttributeList
 * <p>Contains the name and values of a manual cluster snapshot attribute.</p> <p>Manual cluster snapshot attributes are used to authorize other accounts to restore a manual cluster snapshot.</p>
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