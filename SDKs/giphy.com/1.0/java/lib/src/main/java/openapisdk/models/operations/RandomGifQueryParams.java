package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RandomGifQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rating")
    public String rating;
    public RandomGifQueryParams withRating(String rating) {
        this.rating = rating;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tag")
    public String tag;
    public RandomGifQueryParams withTag(String tag) {
        this.tag = tag;
        return this;
    }
}