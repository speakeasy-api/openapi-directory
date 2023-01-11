package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditScorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public EditScorePathParams withScore(String score) {
        this.score = score;
        return this;
    }
}