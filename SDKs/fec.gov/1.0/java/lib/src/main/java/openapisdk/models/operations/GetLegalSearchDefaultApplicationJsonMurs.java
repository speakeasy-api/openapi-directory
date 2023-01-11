package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLegalSearchDefaultApplicationJsonMurs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("close_date")
    public LocalDate closeDate;
    public GetLegalSearchDefaultApplicationJsonMurs withCloseDate(LocalDate closeDate) {
        this.closeDate = closeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commission_votes")
    public GetLegalSearchDefaultApplicationJsonMursCommissionVotes[] commissionVotes;
    public GetLegalSearchDefaultApplicationJsonMurs withCommissionVotes(GetLegalSearchDefaultApplicationJsonMursCommissionVotes[] commissionVotes) {
        this.commissionVotes = commissionVotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dispositions")
    public GetLegalSearchDefaultApplicationJsonMursDispositions[] dispositions;
    public GetLegalSearchDefaultApplicationJsonMurs withDispositions(GetLegalSearchDefaultApplicationJsonMursDispositions[] dispositions) {
        this.dispositions = dispositions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doc_id")
    public String docId;
    public GetLegalSearchDefaultApplicationJsonMurs withDocId(String docId) {
        this.docId = docId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document_highlights")
    public java.util.Map<String, Object> documentHighlights;
    public GetLegalSearchDefaultApplicationJsonMurs withDocumentHighlights(java.util.Map<String, Object> documentHighlights) {
        this.documentHighlights = documentHighlights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documents")
    public GetLegalSearchDefaultApplicationJsonMursDocuments[] documents;
    public GetLegalSearchDefaultApplicationJsonMurs withDocuments(GetLegalSearchDefaultApplicationJsonMursDocuments[] documents) {
        this.documents = documents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_cycles")
    public Long electionCycles;
    public GetLegalSearchDefaultApplicationJsonMurs withElectionCycles(Long electionCycles) {
        this.electionCycles = electionCycles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highlights")
    public String[] highlights;
    public GetLegalSearchDefaultApplicationJsonMurs withHighlights(String[] highlights) {
        this.highlights = highlights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mur_type")
    public GetLegalSearchDefaultApplicationJsonMursMurTypeEnum murType;
    public GetLegalSearchDefaultApplicationJsonMurs withMurType(GetLegalSearchDefaultApplicationJsonMursMurTypeEnum murType) {
        this.murType = murType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetLegalSearchDefaultApplicationJsonMurs withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("no")
    public String no;
    public GetLegalSearchDefaultApplicationJsonMurs withNo(String no) {
        this.no = no;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("open_date")
    public LocalDate openDate;
    public GetLegalSearchDefaultApplicationJsonMurs withOpenDate(LocalDate openDate) {
        this.openDate = openDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants")
    public GetLegalSearchDefaultApplicationJsonMursParticipants[] participants;
    public GetLegalSearchDefaultApplicationJsonMurs withParticipants(GetLegalSearchDefaultApplicationJsonMursParticipants[] participants) {
        this.participants = participants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("respondents")
    public String[] respondents;
    public GetLegalSearchDefaultApplicationJsonMurs withRespondents(String[] respondents) {
        this.respondents = respondents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjects")
    public String[] subjects;
    public GetLegalSearchDefaultApplicationJsonMurs withSubjects(String[] subjects) {
        this.subjects = subjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GetLegalSearchDefaultApplicationJsonMurs withUrl(String url) {
        this.url = url;
        return this;
    }
}