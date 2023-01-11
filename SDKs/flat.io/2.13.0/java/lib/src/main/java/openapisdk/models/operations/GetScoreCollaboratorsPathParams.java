package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScoreCollaboratorsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public GetScoreCollaboratorsPathParams withScore(String score) {
        this.score = score;
        return this;
    }
}