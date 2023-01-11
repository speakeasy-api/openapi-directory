package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DocumentList
 * Documents List
**/
public class DocumentList {
    @JsonProperty("documents")
    public java.util.Map<String, Object>[] documents;
    public DocumentList withDocuments(java.util.Map<String, Object>[] documents) {
        this.documents = documents;
        return this;
    }
    @JsonProperty("sum")
    public Integer sum;
    public DocumentList withSum(Integer sum) {
        this.sum = sum;
        return this;
    }
}