package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPublicKeysResponse
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
**/
public class ListPublicKeysResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListPublicKeysResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PublicKeyList")
    public PublicKey[] publicKeyList;
    public ListPublicKeysResponse withPublicKeyList(PublicKey[] publicKeyList) {
        this.publicKeyList = publicKeyList;
        return this;
    }
}