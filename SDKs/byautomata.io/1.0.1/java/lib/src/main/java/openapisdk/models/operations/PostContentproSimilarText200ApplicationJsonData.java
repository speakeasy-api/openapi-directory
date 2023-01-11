package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostContentproSimilarText200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("article")
    public openapisdk.models.shared.Article article;
    public PostContentproSimilarText200ApplicationJsonData withArticle(openapisdk.models.shared.Article article) {
        this.article = article;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public openapisdk.models.shared.ContentProCompany company;
    public PostContentproSimilarText200ApplicationJsonData withCompany(openapisdk.models.shared.ContentProCompany company) {
        this.company = company;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snippets")
    public openapisdk.models.shared.ContentProSnippets snippets;
    public PostContentproSimilarText200ApplicationJsonData withSnippets(openapisdk.models.shared.ContentProSnippets snippets) {
        this.snippets = snippets;
        return this;
    }
}