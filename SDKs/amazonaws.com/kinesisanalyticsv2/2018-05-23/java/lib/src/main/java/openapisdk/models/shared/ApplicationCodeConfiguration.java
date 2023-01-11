package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplicationCodeConfiguration
 * Describes code configuration for an application.
**/
public class ApplicationCodeConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeContent")
    public CodeContent codeContent;
    public ApplicationCodeConfiguration withCodeContent(CodeContent codeContent) {
        this.codeContent = codeContent;
        return this;
    }
    @JsonProperty("CodeContentType")
    public CodeContentTypeEnum codeContentType;
    public ApplicationCodeConfiguration withCodeContentType(CodeContentTypeEnum codeContentType) {
        this.codeContentType = codeContentType;
        return this;
    }
}