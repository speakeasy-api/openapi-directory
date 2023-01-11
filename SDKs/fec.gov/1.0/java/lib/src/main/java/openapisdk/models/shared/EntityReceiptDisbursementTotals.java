package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EntityReceiptDisbursementTotals {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cumulative_candidate_disbursements")
    public Float cumulativeCandidateDisbursements;
    public EntityReceiptDisbursementTotals withCumulativeCandidateDisbursements(Float cumulativeCandidateDisbursements) {
        this.cumulativeCandidateDisbursements = cumulativeCandidateDisbursements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cumulative_candidate_receipts")
    public Float cumulativeCandidateReceipts;
    public EntityReceiptDisbursementTotals withCumulativeCandidateReceipts(Float cumulativeCandidateReceipts) {
        this.cumulativeCandidateReceipts = cumulativeCandidateReceipts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cumulative_pac_disbursements")
    public Float cumulativePacDisbursements;
    public EntityReceiptDisbursementTotals withCumulativePacDisbursements(Float cumulativePacDisbursements) {
        this.cumulativePacDisbursements = cumulativePacDisbursements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cumulative_pac_receipts")
    public Float cumulativePacReceipts;
    public EntityReceiptDisbursementTotals withCumulativePacReceipts(Float cumulativePacReceipts) {
        this.cumulativePacReceipts = cumulativePacReceipts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cumulative_party_disbursements")
    public Float cumulativePartyDisbursements;
    public EntityReceiptDisbursementTotals withCumulativePartyDisbursements(Float cumulativePartyDisbursements) {
        this.cumulativePartyDisbursements = cumulativePartyDisbursements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cumulative_party_receipts")
    public Float cumulativePartyReceipts;
    public EntityReceiptDisbursementTotals withCumulativePartyReceipts(Float cumulativePartyReceipts) {
        this.cumulativePartyReceipts = cumulativePartyReceipts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cycle")
    public Integer cycle;
    public EntityReceiptDisbursementTotals withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_date")
    public LocalDate endDate;
    public EntityReceiptDisbursementTotals withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
}