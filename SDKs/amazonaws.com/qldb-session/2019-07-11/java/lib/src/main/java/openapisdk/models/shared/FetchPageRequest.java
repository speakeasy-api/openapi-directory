package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FetchPageRequest
 * Specifies the details of the page to be fetched.
**/
public class FetchPageRequest {
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public FetchPageRequest withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonProperty("TransactionId")
    public String transactionId;
    public FetchPageRequest withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}