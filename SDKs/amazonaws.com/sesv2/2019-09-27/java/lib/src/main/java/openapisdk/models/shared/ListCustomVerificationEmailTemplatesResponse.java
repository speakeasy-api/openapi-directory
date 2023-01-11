package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCustomVerificationEmailTemplatesResponse
 * The following elements are returned by the service.
**/
public class ListCustomVerificationEmailTemplatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomVerificationEmailTemplates")
    public CustomVerificationEmailTemplateMetadata[] customVerificationEmailTemplates;
    public ListCustomVerificationEmailTemplatesResponse withCustomVerificationEmailTemplates(CustomVerificationEmailTemplateMetadata[] customVerificationEmailTemplates) {
        this.customVerificationEmailTemplates = customVerificationEmailTemplates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListCustomVerificationEmailTemplatesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}