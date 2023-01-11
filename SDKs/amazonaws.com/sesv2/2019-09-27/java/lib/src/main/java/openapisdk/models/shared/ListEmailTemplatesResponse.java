package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListEmailTemplatesResponse
 * The following elements are returned by the service.
**/
public class ListEmailTemplatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListEmailTemplatesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplatesMetadata")
    public EmailTemplateMetadata[] templatesMetadata;
    public ListEmailTemplatesResponse withTemplatesMetadata(EmailTemplateMetadata[] templatesMetadata) {
        this.templatesMetadata = templatesMetadata;
        return this;
    }
}