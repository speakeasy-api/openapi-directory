package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NewsFeedCardsDetailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=card_id")
    public String cardId;
    public NewsFeedCardsDetailsQueryParams withCardId(String cardId) {
        this.cardId = cardId;
        return this;
    }
}