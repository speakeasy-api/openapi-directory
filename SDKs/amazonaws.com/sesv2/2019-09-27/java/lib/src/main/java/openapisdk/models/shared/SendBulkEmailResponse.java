package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SendBulkEmailResponse
 * The following data is returned in JSON format by the service.
**/
public class SendBulkEmailResponse {
    @JsonProperty("BulkEmailEntryResults")
    public BulkEmailEntryResult[] bulkEmailEntryResults;
    public SendBulkEmailResponse withBulkEmailEntryResults(BulkEmailEntryResult[] bulkEmailEntryResults) {
        this.bulkEmailEntryResults = bulkEmailEntryResults;
        return this;
    }
}