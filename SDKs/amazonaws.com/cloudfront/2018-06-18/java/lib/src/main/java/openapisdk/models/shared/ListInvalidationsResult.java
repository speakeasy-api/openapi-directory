package openapisdk.models.shared;



/**
 * ListInvalidationsResult
 * The returned result of the corresponding request. 
**/
public class ListInvalidationsResult {
    public InvalidationList invalidationList;
    public ListInvalidationsResult withInvalidationList(InvalidationList invalidationList) {
        this.invalidationList = invalidationList;
        return this;
    }
}