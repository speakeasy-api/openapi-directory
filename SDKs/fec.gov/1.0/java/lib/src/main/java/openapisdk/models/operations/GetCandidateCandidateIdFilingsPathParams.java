package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCandidateCandidateIdFilingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=candidate_id")
    public String candidateId;
    public GetCandidateCandidateIdFilingsPathParams withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
}