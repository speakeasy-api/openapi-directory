package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ArticleEmbargoUpdater {
    @JsonProperty("embargo_date")
    public String embargoDate;
    public ArticleEmbargoUpdater withEmbargoDate(String embargoDate) {
        this.embargoDate = embargoDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embargo_options")
    public java.util.Map<String, Object>[] embargoOptions;
    public ArticleEmbargoUpdater withEmbargoOptions(java.util.Map<String, Object>[] embargoOptions) {
        this.embargoOptions = embargoOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embargo_reason")
    public String embargoReason;
    public ArticleEmbargoUpdater withEmbargoReason(String embargoReason) {
        this.embargoReason = embargoReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embargo_title")
    public String embargoTitle;
    public ArticleEmbargoUpdater withEmbargoTitle(String embargoTitle) {
        this.embargoTitle = embargoTitle;
        return this;
    }
    @JsonProperty("embargo_type")
    public ArticleEmbargoUpdaterEmbargoTypeEnum embargoType;
    public ArticleEmbargoUpdater withEmbargoType(ArticleEmbargoUpdaterEmbargoTypeEnum embargoType) {
        this.embargoType = embargoType;
        return this;
    }
    @JsonProperty("is_embargoed")
    public Boolean isEmbargoed;
    public ArticleEmbargoUpdater withIsEmbargoed(Boolean isEmbargoed) {
        this.isEmbargoed = isEmbargoed;
        return this;
    }
}