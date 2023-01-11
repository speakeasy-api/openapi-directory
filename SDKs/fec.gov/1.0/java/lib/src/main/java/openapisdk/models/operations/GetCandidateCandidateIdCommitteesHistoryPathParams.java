package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCandidateCandidateIdCommitteesHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=candidate_id")
    public String candidateId;
    public GetCandidateCandidateIdCommitteesHistoryPathParams withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
}