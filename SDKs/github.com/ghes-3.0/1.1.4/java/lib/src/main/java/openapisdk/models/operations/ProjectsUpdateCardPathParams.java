package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsUpdateCardPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=card_id")
    public Long cardId;
    public ProjectsUpdateCardPathParams withCardId(Long cardId) {
        this.cardId = cardId;
        return this;
    }
}