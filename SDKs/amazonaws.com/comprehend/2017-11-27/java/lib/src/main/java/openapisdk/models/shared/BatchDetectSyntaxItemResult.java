package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchDetectSyntaxItemResult
 * The result of calling the operation. The operation returns one object that is successfully processed by the operation.
**/
public class BatchDetectSyntaxItemResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Index")
    public Long index;
    public BatchDetectSyntaxItemResult withIndex(Long index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SyntaxTokens")
    public SyntaxToken[] syntaxTokens;
    public BatchDetectSyntaxItemResult withSyntaxTokens(SyntaxToken[] syntaxTokens) {
        this.syntaxTokens = syntaxTokens;
        return this;
    }
}