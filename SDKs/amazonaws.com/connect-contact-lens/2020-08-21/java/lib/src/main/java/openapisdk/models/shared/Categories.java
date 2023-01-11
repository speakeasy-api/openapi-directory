package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Categories
 * Provides the category rules that are used to automatically categorize contacts based on uttered keywords and phrases.
**/
public class Categories {
    @JsonProperty("MatchedCategories")
    public String[] matchedCategories;
    public Categories withMatchedCategories(String[] matchedCategories) {
        this.matchedCategories = matchedCategories;
        return this;
    }
    @JsonProperty("MatchedDetails")
    public java.util.Map<String, CategoryDetails> matchedDetails;
    public Categories withMatchedDetails(java.util.Map<String, CategoryDetails> matchedDetails) {
        this.matchedDetails = matchedDetails;
        return this;
    }
}