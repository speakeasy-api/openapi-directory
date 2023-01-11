package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplicationCodeConfigurationDescription
 * Describes code configuration for an application.
**/
public class ApplicationCodeConfigurationDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeContentDescription")
    public CodeContentDescription codeContentDescription;
    public ApplicationCodeConfigurationDescription withCodeContentDescription(CodeContentDescription codeContentDescription) {
        this.codeContentDescription = codeContentDescription;
        return this;
    }
    @JsonProperty("CodeContentType")
    public CodeContentTypeEnum codeContentType;
    public ApplicationCodeConfigurationDescription withCodeContentType(CodeContentTypeEnum codeContentType) {
        this.codeContentType = codeContentType;
        return this;
    }
}