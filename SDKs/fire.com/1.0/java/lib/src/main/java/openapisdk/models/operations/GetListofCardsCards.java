package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetListofCardsCards {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cards")
    public GetListofCardsCardsCard[] cards;
    public GetListofCardsCards withCards(GetListofCardsCardsCard[] cards) {
        this.cards = cards;
        return this;
    }
}