package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsMoveCardPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=card_id")
    public Long cardId;
    public ProjectsMoveCardPathParams withCardId(Long cardId) {
        this.cardId = cardId;
        return this;
    }
}