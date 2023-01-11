package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SlugRequestBody {
    @JsonProperty("slug")
    public String slug;
    public SlugRequestBody withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}