package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateScoreRevisionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public CreateScoreRevisionPathParams withScore(String score) {
        this.score = score;
        return this;
    }
}