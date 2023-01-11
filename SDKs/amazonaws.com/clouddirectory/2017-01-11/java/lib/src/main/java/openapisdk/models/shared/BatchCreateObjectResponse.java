package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchCreateObjectResponse
 * Represents the output of a <a>CreateObject</a> response operation.
**/
public class BatchCreateObjectResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectIdentifier")
    public String objectIdentifier;
    public BatchCreateObjectResponse withObjectIdentifier(String objectIdentifier) {
        this.objectIdentifier = objectIdentifier;
        return this;
    }
}