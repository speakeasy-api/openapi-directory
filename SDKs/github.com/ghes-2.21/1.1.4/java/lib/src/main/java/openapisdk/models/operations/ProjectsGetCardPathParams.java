package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsGetCardPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=card_id")
    public Long cardId;
    public ProjectsGetCardPathParams withCardId(Long cardId) {
        this.cardId = cardId;
        return this;
    }
}