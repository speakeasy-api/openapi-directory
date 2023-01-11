package openapisdk.models.shared;



/**
 * DeleteMessageBatchResultEntryList
 * Encloses the <code>Id</code> of an entry in <code> <a>DeleteMessageBatch</a>.</code> 
**/
public class DeleteMessageBatchResultEntryList {
    public String id;
    public DeleteMessageBatchResultEntryList withId(String id) {
        this.id = id;
        return this;
    }
}