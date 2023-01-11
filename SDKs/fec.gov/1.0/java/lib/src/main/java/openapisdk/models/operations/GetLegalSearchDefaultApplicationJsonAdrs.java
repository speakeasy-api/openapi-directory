package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLegalSearchDefaultApplicationJsonAdrs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("close_date")
    public LocalDate closeDate;
    public GetLegalSearchDefaultApplicationJsonAdrs withCloseDate(LocalDate closeDate) {
        this.closeDate = closeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commission_votes")
    public GetLegalSearchDefaultApplicationJsonAdrsCommissionVotes[] commissionVotes;
    public GetLegalSearchDefaultApplicationJsonAdrs withCommissionVotes(GetLegalSearchDefaultApplicationJsonAdrsCommissionVotes[] commissionVotes) {
        this.commissionVotes = commissionVotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dispositions")
    public GetLegalSearchDefaultApplicationJsonAdrsDispositions[] dispositions;
    public GetLegalSearchDefaultApplicationJsonAdrs withDispositions(GetLegalSearchDefaultApplicationJsonAdrsDispositions[] dispositions) {
        this.dispositions = dispositions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doc_id")
    public String docId;
    public GetLegalSearchDefaultApplicationJsonAdrs withDocId(String docId) {
        this.docId = docId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document_highlights")
    public java.util.Map<String, Object> documentHighlights;
    public GetLegalSearchDefaultApplicationJsonAdrs withDocumentHighlights(java.util.Map<String, Object> documentHighlights) {
        this.documentHighlights = documentHighlights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documents")
    public GetLegalSearchDefaultApplicationJsonAdrsDocuments[] documents;
    public GetLegalSearchDefaultApplicationJsonAdrs withDocuments(GetLegalSearchDefaultApplicationJsonAdrsDocuments[] documents) {
        this.documents = documents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_cycles")
    public Long electionCycles;
    public GetLegalSearchDefaultApplicationJsonAdrs withElectionCycles(Long electionCycles) {
        this.electionCycles = electionCycles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highlights")
    public String[] highlights;
    public GetLegalSearchDefaultApplicationJsonAdrs withHighlights(String[] highlights) {
        this.highlights = highlights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetLegalSearchDefaultApplicationJsonAdrs withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("no")
    public String no;
    public GetLegalSearchDefaultApplicationJsonAdrs withNo(String no) {
        this.no = no;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("open_date")
    public LocalDate openDate;
    public GetLegalSearchDefaultApplicationJsonAdrs withOpenDate(LocalDate openDate) {
        this.openDate = openDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants")
    public GetLegalSearchDefaultApplicationJsonAdrsParticipants[] participants;
    public GetLegalSearchDefaultApplicationJsonAdrs withParticipants(GetLegalSearchDefaultApplicationJsonAdrsParticipants[] participants) {
        this.participants = participants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("respondents")
    public String[] respondents;
    public GetLegalSearchDefaultApplicationJsonAdrs withRespondents(String[] respondents) {
        this.respondents = respondents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjects")
    public String[] subjects;
    public GetLegalSearchDefaultApplicationJsonAdrs withSubjects(String[] subjects) {
        this.subjects = subjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GetLegalSearchDefaultApplicationJsonAdrs withUrl(String url) {
        this.url = url;
        return this;
    }
}