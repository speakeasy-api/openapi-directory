package openapisdk.models.shared;



/**
 * DefineIndexFieldResponse
 * A response message that contains the status of an updated index field.
**/
public class DefineIndexFieldResponse {
    public IndexFieldStatus indexField;
    public DefineIndexFieldResponse withIndexField(IndexFieldStatus indexField) {
        this.indexField = indexField;
        return this;
    }
}