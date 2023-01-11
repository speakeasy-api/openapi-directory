package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLegalSearchDefaultApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admin_fines")
    public GetLegalSearchDefaultApplicationJsonAdminFines[] adminFines;
    public GetLegalSearchDefaultApplicationJson withAdminFines(GetLegalSearchDefaultApplicationJsonAdminFines[] adminFines) {
        this.adminFines = adminFines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adrs")
    public GetLegalSearchDefaultApplicationJsonAdrs[] adrs;
    public GetLegalSearchDefaultApplicationJson withAdrs(GetLegalSearchDefaultApplicationJsonAdrs[] adrs) {
        this.adrs = adrs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advisory_opinions")
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinions[] advisoryOpinions;
    public GetLegalSearchDefaultApplicationJson withAdvisoryOpinions(GetLegalSearchDefaultApplicationJsonAdvisoryOpinions[] advisoryOpinions) {
        this.advisoryOpinions = advisoryOpinions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("murs")
    public GetLegalSearchDefaultApplicationJsonMurs[] murs;
    public GetLegalSearchDefaultApplicationJson withMurs(GetLegalSearchDefaultApplicationJsonMurs[] murs) {
        this.murs = murs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regulations")
    public GetLegalSearchDefaultApplicationJsonRegulations[] regulations;
    public GetLegalSearchDefaultApplicationJson withRegulations(GetLegalSearchDefaultApplicationJsonRegulations[] regulations) {
        this.regulations = regulations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statutes")
    public GetLegalSearchDefaultApplicationJsonStatutes[] statutes;
    public GetLegalSearchDefaultApplicationJson withStatutes(GetLegalSearchDefaultApplicationJsonStatutes[] statutes) {
        this.statutes = statutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_admin_fines")
    public Long totalAdminFines;
    public GetLegalSearchDefaultApplicationJson withTotalAdminFines(Long totalAdminFines) {
        this.totalAdminFines = totalAdminFines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_adrs")
    public Long totalAdrs;
    public GetLegalSearchDefaultApplicationJson withTotalAdrs(Long totalAdrs) {
        this.totalAdrs = totalAdrs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_advisory_opinions")
    public Long totalAdvisoryOpinions;
    public GetLegalSearchDefaultApplicationJson withTotalAdvisoryOpinions(Long totalAdvisoryOpinions) {
        this.totalAdvisoryOpinions = totalAdvisoryOpinions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_all")
    public Long totalAll;
    public GetLegalSearchDefaultApplicationJson withTotalAll(Long totalAll) {
        this.totalAll = totalAll;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_murs")
    public Long totalMurs;
    public GetLegalSearchDefaultApplicationJson withTotalMurs(Long totalMurs) {
        this.totalMurs = totalMurs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_regulations")
    public Long totalRegulations;
    public GetLegalSearchDefaultApplicationJson withTotalRegulations(Long totalRegulations) {
        this.totalRegulations = totalRegulations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_statutes")
    public Long totalStatutes;
    public GetLegalSearchDefaultApplicationJson withTotalStatutes(Long totalStatutes) {
        this.totalStatutes = totalStatutes;
        return this;
    }
}