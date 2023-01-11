package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCandidateCandidateIdCommitteesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=candidate_id")
    public String candidateId;
    public GetCandidateCandidateIdCommitteesPathParams withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
}