package openapisdk.models.shared;



/**
 * DeleteIndexFieldResponse
 * A response message that contains the status of a deleted index field.
**/
public class DeleteIndexFieldResponse {
    public IndexFieldStatus indexField;
    public DeleteIndexFieldResponse withIndexField(IndexFieldStatus indexField) {
        this.indexField = indexField;
        return this;
    }
}