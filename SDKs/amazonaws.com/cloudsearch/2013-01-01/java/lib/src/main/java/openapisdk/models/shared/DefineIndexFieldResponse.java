package openapisdk.models.shared;



/**
 * DefineIndexFieldResponse
 * The result of a <code><a>DefineIndexField</a></code> request. Contains the status of the newly-configured index field.
**/
public class DefineIndexFieldResponse {
    public IndexFieldStatus indexField;
    public DefineIndexFieldResponse withIndexField(IndexFieldStatus indexField) {
        this.indexField = indexField;
        return this;
    }
}