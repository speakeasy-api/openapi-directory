package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ArticleEmbargo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embargo_date")
    public String embargoDate;
    public ArticleEmbargo withEmbargoDate(String embargoDate) {
        this.embargoDate = embargoDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embargo_options")
    public java.util.Map<String, Object>[] embargoOptions;
    public ArticleEmbargo withEmbargoOptions(java.util.Map<String, Object>[] embargoOptions) {
        this.embargoOptions = embargoOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embargo_reason")
    public String embargoReason;
    public ArticleEmbargo withEmbargoReason(String embargoReason) {
        this.embargoReason = embargoReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embargo_title")
    public String embargoTitle;
    public ArticleEmbargo withEmbargoTitle(String embargoTitle) {
        this.embargoTitle = embargoTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embargo_type")
    public String embargoType;
    public ArticleEmbargo withEmbargoType(String embargoType) {
        this.embargoType = embargoType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_embargoed")
    public Boolean isEmbargoed;
    public ArticleEmbargo withIsEmbargoed(Boolean isEmbargoed) {
        this.isEmbargoed = isEmbargoed;
        return this;
    }
}