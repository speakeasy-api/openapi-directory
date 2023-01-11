package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CurationComment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public Long accountId;
    public CurationComment withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public CurationComment withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public CurationComment withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CurationCommentTypeEnum type;
    public CurationComment withType(CurationCommentTypeEnum type) {
        this.type = type;
        return this;
    }
}