package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SourceKeyword
 *  The keyword to search for in CloudTrail logs, Config rules, Security Hub checks, and Amazon Web Services API names. 
**/
public class SourceKeyword {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywordInputType")
    public KeywordInputTypeEnum keywordInputType;
    public SourceKeyword withKeywordInputType(KeywordInputTypeEnum keywordInputType) {
        this.keywordInputType = keywordInputType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywordValue")
    public String keywordValue;
    public SourceKeyword withKeywordValue(String keywordValue) {
        this.keywordValue = keywordValue;
        return this;
    }
}