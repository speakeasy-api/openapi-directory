package openapisdk.models.shared;



/**
 * DeleteIndexFieldResponse
 * The result of a <code><a>DeleteIndexField</a></code> request.
**/
public class DeleteIndexFieldResponse {
    public IndexFieldStatus indexField;
    public DeleteIndexFieldResponse withIndexField(IndexFieldStatus indexField) {
        this.indexField = indexField;
        return this;
    }
}