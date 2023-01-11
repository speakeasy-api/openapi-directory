package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CodeSigningSignature
 * Describes the signature for a file.
**/
public class CodeSigningSignature {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inlineDocument")
    public String inlineDocument;
    public CodeSigningSignature withInlineDocument(String inlineDocument) {
        this.inlineDocument = inlineDocument;
        return this;
    }
}