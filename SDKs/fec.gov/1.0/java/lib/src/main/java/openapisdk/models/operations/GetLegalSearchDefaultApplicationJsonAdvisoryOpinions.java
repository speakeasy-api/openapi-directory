package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLegalSearchDefaultApplicationJsonAdvisoryOpinions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ao_citations")
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAoCitations[] aoCitations;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinions withAoCitations(GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAoCitations[] aoCitations) {
        this.aoCitations = aoCitations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aos_cited_by")
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAosCitedBy[] aosCitedBy;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinions withAosCitedBy(GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsAosCitedBy[] aosCitedBy) {
        this.aosCitedBy = aosCitedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commenter_names")
    public String[] commenterNames;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinions withCommenterNames(String[] commenterNames) {
        this.commenterNames = commenterNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document_highlights")
    public java.util.Map<String, Object> documentHighlights;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinions withDocumentHighlights(java.util.Map<String, Object> documentHighlights) {
        this.documentHighlights = documentHighlights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documents")
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments[] documents;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinions withDocuments(GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsDocuments[] documents) {
        this.documents = documents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entities")
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities[] entities;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinions withEntities(GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsEntities[] entities) {
        this.entities = entities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highlights")
    public String[] highlights;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinions withHighlights(String[] highlights) {
        this.highlights = highlights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_pending")
    public Boolean isPending;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinions withIsPending(Boolean isPending) {
        this.isPending = isPending;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issue_date")
    public LocalDate issueDate;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinions withIssueDate(LocalDate issueDate) {
        this.issueDate = issueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinions withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("no")
    public String no;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinions withNo(String no) {
        this.no = no;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regulatory_citations")
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations[] regulatoryCitations;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinions withRegulatoryCitations(GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsRegulatoryCitations[] regulatoryCitations) {
        this.regulatoryCitations = regulatoryCitations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("representative_names")
    public String[] representativeNames;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinions withRepresentativeNames(String[] representativeNames) {
        this.representativeNames = representativeNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_date")
    public LocalDate requestDate;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinions withRequestDate(LocalDate requestDate) {
        this.requestDate = requestDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestor_names")
    public String[] requestorNames;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinions withRequestorNames(String[] requestorNames) {
        this.requestorNames = requestorNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestor_types")
    public String[] requestorTypes;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinions withRequestorTypes(String[] requestorTypes) {
        this.requestorTypes = requestorTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinions withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statutory_citations")
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsStatutoryCitations[] statutoryCitations;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinions withStatutoryCitations(GetLegalSearchDefaultApplicationJsonAdvisoryOpinionsStatutoryCitations[] statutoryCitations) {
        this.statutoryCitations = statutoryCitations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public String summary;
    public GetLegalSearchDefaultApplicationJsonAdvisoryOpinions withSummary(String summary) {
        this.summary = summary;
        return this;
    }
}