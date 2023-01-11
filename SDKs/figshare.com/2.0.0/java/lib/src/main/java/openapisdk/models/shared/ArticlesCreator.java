package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ArticlesCreator {
    @JsonProperty("articles")
    public Long[] articles;
    public ArticlesCreator withArticles(Long[] articles) {
        this.articles = articles;
        return this;
    }
}