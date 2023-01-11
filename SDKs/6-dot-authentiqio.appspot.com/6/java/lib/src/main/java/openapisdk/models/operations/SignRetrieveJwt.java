package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SignRetrieveJwt {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exp")
    public Long exp;
    public SignRetrieveJwt withExp(Long exp) {
        this.exp = exp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public SignRetrieveJwt withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sub")
    public String sub;
    public SignRetrieveJwt withSub(String sub) {
        this.sub = sub;
        return this;
    }
}