package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTextTranslationJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListTextTranslationJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TextTranslationJobPropertiesList")
    public TextTranslationJobProperties[] textTranslationJobPropertiesList;
    public ListTextTranslationJobsResponse withTextTranslationJobPropertiesList(TextTranslationJobProperties[] textTranslationJobPropertiesList) {
        this.textTranslationJobPropertiesList = textTranslationJobPropertiesList;
        return this;
    }
}