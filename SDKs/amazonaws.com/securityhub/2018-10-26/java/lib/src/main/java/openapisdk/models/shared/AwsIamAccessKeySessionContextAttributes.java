package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsIamAccessKeySessionContextAttributes
 * Attributes of the session that the key was used for.
**/
public class AwsIamAccessKeySessionContextAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreationDate")
    public String creationDate;
    public AwsIamAccessKeySessionContextAttributes withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MfaAuthenticated")
    public Boolean mfaAuthenticated;
    public AwsIamAccessKeySessionContextAttributes withMfaAuthenticated(Boolean mfaAuthenticated) {
        this.mfaAuthenticated = mfaAuthenticated;
        return this;
    }
}