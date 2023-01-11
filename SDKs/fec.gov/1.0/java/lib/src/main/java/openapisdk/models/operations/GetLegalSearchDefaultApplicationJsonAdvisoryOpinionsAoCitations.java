package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAoCitations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAoCitations withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("no")
    public String no;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAoCitations withNo(String no) {
        this.no = no;
        return this;
    }
}