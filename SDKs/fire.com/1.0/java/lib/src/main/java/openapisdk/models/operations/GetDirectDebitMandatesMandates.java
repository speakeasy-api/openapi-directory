package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDirectDebitMandatesMandates {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mandates")
    public GetDirectDebitMandatesMandatesMandate[] mandates;
    public GetDirectDebitMandatesMandates withMandates(GetDirectDebitMandatesMandatesMandate[] mandates) {
        this.mandates = mandates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public GetDirectDebitMandatesMandates withTotal(Long total) {
        this.total = total;
        return this;
    }
}