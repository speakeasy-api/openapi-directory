package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CrawlDatamodel {
    @JsonProperty("fields")
    public CrawlDatamodelField[] fields;
    public CrawlDatamodel withFields(CrawlDatamodelField[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonProperty("groups")
    public CrawlDatamodelGroup[] groups;
    public CrawlDatamodel withGroups(CrawlDatamodelGroup[] groups) {
        this.groups = groups;
        return this;
    }
}