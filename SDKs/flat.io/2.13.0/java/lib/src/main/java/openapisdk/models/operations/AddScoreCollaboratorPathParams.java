package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddScoreCollaboratorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public AddScoreCollaboratorPathParams withScore(String score) {
        this.score = score;
        return this;
    }
}