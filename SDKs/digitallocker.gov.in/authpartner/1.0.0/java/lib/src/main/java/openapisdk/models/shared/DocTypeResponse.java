package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DocTypeResponse {
    @JsonProperty("documents")
    public Object[] documents;
    public DocTypeResponse withDocuments(Object[] documents) {
        this.documents = documents;
        return this;
    }
}