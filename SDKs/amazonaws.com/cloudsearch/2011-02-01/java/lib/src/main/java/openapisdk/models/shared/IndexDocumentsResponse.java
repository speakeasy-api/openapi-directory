package openapisdk.models.shared;



/**
 * IndexDocumentsResponse
 * The result of an <code>IndexDocuments</code> action.
**/
public class IndexDocumentsResponse {
    public String[] fieldNames;
    public IndexDocumentsResponse withFieldNames(String[] fieldNames) {
        this.fieldNames = fieldNames;
        return this;
    }
}