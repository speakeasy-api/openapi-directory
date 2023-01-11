package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PrivateAuthorsSearch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_id")
    public Long groupId;
    public PrivateAuthorsSearch withGroupId(Long groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("institution_id")
    public Long institutionId;
    public PrivateAuthorsSearch withInstitutionId(Long institutionId) {
        this.institutionId = institutionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_active")
    public Boolean isActive;
    public PrivateAuthorsSearch withIsActive(Boolean isActive) {
        this.isActive = isActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_public")
    public Boolean isPublic;
    public PrivateAuthorsSearch withIsPublic(Boolean isPublic) {
        this.isPublic = isPublic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Long limit;
    public PrivateAuthorsSearch withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Long offset;
    public PrivateAuthorsSearch withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orcid")
    public String orcid;
    public PrivateAuthorsSearch withOrcid(String orcid) {
        this.orcid = orcid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public PrivateAuthorsSearchOrderEnum order;
    public PrivateAuthorsSearch withOrder(PrivateAuthorsSearchOrderEnum order) {
        this.order = order;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_direction")
    public PrivateAuthorsSearchOrderDirectionEnum orderDirection;
    public PrivateAuthorsSearch withOrderDirection(PrivateAuthorsSearchOrderDirectionEnum orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public PrivateAuthorsSearch withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public PrivateAuthorsSearch withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_for")
    public String searchFor;
    public PrivateAuthorsSearch withSearchFor(String searchFor) {
        this.searchFor = searchFor;
        return this;
    }
}