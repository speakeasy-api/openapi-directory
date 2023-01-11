package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDirectDebitsForMandateUuidDirectDebits {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directdebits")
    public GetDirectDebitsForMandateUuidDirectDebitsDirectDebit[] directdebits;
    public GetDirectDebitsForMandateUuidDirectDebits withDirectdebits(GetDirectDebitsForMandateUuidDirectDebitsDirectDebit[] directdebits) {
        this.directdebits = directdebits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public GetDirectDebitsForMandateUuidDirectDebits withTotal(Long total) {
        this.total = total;
        return this;
    }
}