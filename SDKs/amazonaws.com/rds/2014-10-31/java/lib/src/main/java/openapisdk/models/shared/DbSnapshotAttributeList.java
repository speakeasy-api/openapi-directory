package openapisdk.models.shared;



/**
 * DbSnapshotAttributeList
 * <p>Contains the name and values of a manual DB snapshot attribute</p> <p>Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code> API.</p>
**/
public class DbSnapshotAttributeList {
    public String attributeName;
    public DbSnapshotAttributeList withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    public java.util.Map<String, Object>[] attributeValues;
    public DbSnapshotAttributeList withAttributeValues(java.util.Map<String, Object>[] attributeValues) {
        this.attributeValues = attributeValues;
        return this;
    }
}