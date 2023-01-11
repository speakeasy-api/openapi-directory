package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("part")
    public Long part;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations withPart(Long part) {
        this.part = part;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("section")
    public Long section;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations withSection(Long section) {
        this.section = section;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public Long title;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations withTitle(Long title) {
        this.title = title;
        return this;
    }
}