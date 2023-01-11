package openapisdk.models.shared;



/**
 * IndexDocumentsResponse
 * The result of an <code>IndexDocuments</code> request. Contains the status of the indexing operation, including the fields being indexed.
**/
public class IndexDocumentsResponse {
    public String[] fieldNames;
    public IndexDocumentsResponse withFieldNames(String[] fieldNames) {
        this.fieldNames = fieldNames;
        return this;
    }
}