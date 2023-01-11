package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsStatutoryCitations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("section")
    public String section;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsStatutoryCitations withSection(String section) {
        this.section = section;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public Long title;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsStatutoryCitations withTitle(Long title) {
        this.title = title;
        return this;
    }
}