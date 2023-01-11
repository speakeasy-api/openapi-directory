package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * SamplingTargetDocument
 * Temporary changes to a sampling rule configuration. To meet the global sampling target for a rule, X-Ray calculates a new reservoir for each service based on the recent sampling results of all services that called <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>.
**/
public class SamplingTargetDocument {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FixedRate")
    public Double fixedRate;
    public SamplingTargetDocument withFixedRate(Double fixedRate) {
        this.fixedRate = fixedRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Interval")
    public Long interval;
    public SamplingTargetDocument withInterval(Long interval) {
        this.interval = interval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReservoirQuota")
    public Long reservoirQuota;
    public SamplingTargetDocument withReservoirQuota(Long reservoirQuota) {
        this.reservoirQuota = reservoirQuota;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ReservoirQuotaTTL")
    public OffsetDateTime reservoirQuotaTTL;
    public SamplingTargetDocument withReservoirQuotaTtl(OffsetDateTime reservoirQuotaTTL) {
        this.reservoirQuotaTTL = reservoirQuotaTTL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleName")
    public String ruleName;
    public SamplingTargetDocument withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
}