package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListLexiconsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Lexicons")
    public LexiconDescription[] lexicons;
    public ListLexiconsOutput withLexicons(LexiconDescription[] lexicons) {
        this.lexicons = lexicons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListLexiconsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}