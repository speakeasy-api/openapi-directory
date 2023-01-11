package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectSyntaxResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SyntaxTokens")
    public SyntaxToken[] syntaxTokens;
    public DetectSyntaxResponse withSyntaxTokens(SyntaxToken[] syntaxTokens) {
        this.syntaxTokens = syntaxTokens;
        return this;
    }
}