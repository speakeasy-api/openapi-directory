package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TestCustomDataIdentifierRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreWords")
    public String[] ignoreWords;
    public TestCustomDataIdentifierRequestBody withIgnoreWords(String[] ignoreWords) {
        this.ignoreWords = ignoreWords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keywords")
    public String[] keywords;
    public TestCustomDataIdentifierRequestBody withKeywords(String[] keywords) {
        this.keywords = keywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumMatchDistance")
    public Long maximumMatchDistance;
    public TestCustomDataIdentifierRequestBody withMaximumMatchDistance(Long maximumMatchDistance) {
        this.maximumMatchDistance = maximumMatchDistance;
        return this;
    }
    @JsonProperty("regex")
    public String regex;
    public TestCustomDataIdentifierRequestBody withRegex(String regex) {
        this.regex = regex;
        return this;
    }
    @JsonProperty("sampleText")
    public String sampleText;
    public TestCustomDataIdentifierRequestBody withSampleText(String sampleText) {
        this.sampleText = sampleText;
        return this;
    }
}