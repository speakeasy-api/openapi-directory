package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SeekInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Integer count;
    public SeekInfo withCount(Integer count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_indexes")
    public String lastIndexes;
    public SeekInfo withLastIndexes(String lastIndexes) {
        this.lastIndexes = lastIndexes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pages")
    public Integer pages;
    public SeekInfo withPages(Integer pages) {
        this.pages = pages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("per_page")
    public Integer perPage;
    public SeekInfo withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
}