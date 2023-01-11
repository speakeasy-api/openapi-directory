package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsIamAccessKeySessionContext
 * Provides information about the session that the key was used for.
**/
public class AwsIamAccessKeySessionContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public AwsIamAccessKeySessionContextAttributes attributes;
    public AwsIamAccessKeySessionContext withAttributes(AwsIamAccessKeySessionContextAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SessionIssuer")
    public AwsIamAccessKeySessionContextSessionIssuer sessionIssuer;
    public AwsIamAccessKeySessionContext withSessionIssuer(AwsIamAccessKeySessionContextSessionIssuer sessionIssuer) {
        this.sessionIssuer = sessionIssuer;
        return this;
    }
}