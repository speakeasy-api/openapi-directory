package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InstitutionAccountsSearch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public InstitutionAccountsSearch withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("institution_user_id")
    public String institutionUserId;
    public InstitutionAccountsSearch withInstitutionUserId(String institutionUserId) {
        this.institutionUserId = institutionUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_active")
    public Long isActive;
    public InstitutionAccountsSearch withIsActive(Long isActive) {
        this.isActive = isActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Long limit;
    public InstitutionAccountsSearch withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Long offset;
    public InstitutionAccountsSearch withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public InstitutionAccountsSearch withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public InstitutionAccountsSearch withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_for")
    public String searchFor;
    public InstitutionAccountsSearch withSearchFor(String searchFor) {
        this.searchFor = searchFor;
        return this;
    }
}