package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserContextDataType
 * Contextual data such as the user's device fingerprint, IP address, or location used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.
**/
public class UserContextDataType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncodedData")
    public String encodedData;
    public UserContextDataType withEncodedData(String encodedData) {
        this.encodedData = encodedData;
        return this;
    }
}