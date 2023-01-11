package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsDeleteCardPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=card_id")
    public Long cardId;
    public ProjectsDeleteCardPathParams withCardId(Long cardId) {
        this.cardId = cardId;
        return this;
    }
}