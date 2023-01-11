package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class JobSalary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public JobSalary withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max")
    public Long max;
    public JobSalary withMax(Long max) {
        this.max = max;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("min")
    public Long min;
    public JobSalary withMin(Long min) {
        this.min = min;
        return this;
    }
}