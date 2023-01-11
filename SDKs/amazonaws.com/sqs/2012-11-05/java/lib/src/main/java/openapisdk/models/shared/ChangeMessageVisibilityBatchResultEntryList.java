package openapisdk.models.shared;



/**
 * ChangeMessageVisibilityBatchResultEntryList
 * Encloses the <code>Id</code> of an entry in <code> <a>ChangeMessageVisibilityBatch</a>.</code> 
**/
public class ChangeMessageVisibilityBatchResultEntryList {
    public String id;
    public ChangeMessageVisibilityBatchResultEntryList withId(String id) {
        this.id = id;
        return this;
    }
}