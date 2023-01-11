package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCandidateCandidateIdHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=candidate_id")
    public String candidateId;
    public GetCandidateCandidateIdHistoryPathParams withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
}