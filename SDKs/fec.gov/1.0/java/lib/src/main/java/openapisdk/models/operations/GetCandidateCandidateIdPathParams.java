package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCandidateCandidateIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=candidate_id")
    public String candidateId;
    public GetCandidateCandidateIdPathParams withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
}