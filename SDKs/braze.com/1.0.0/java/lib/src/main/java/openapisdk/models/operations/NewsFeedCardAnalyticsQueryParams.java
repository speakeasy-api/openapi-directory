package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NewsFeedCardAnalyticsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=card_id")
    public String cardId;
    public NewsFeedCardAnalyticsQueryParams withCardId(String cardId) {
        this.cardId = cardId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ending_at")
    public String endingAt;
    public NewsFeedCardAnalyticsQueryParams withEndingAt(String endingAt) {
        this.endingAt = endingAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=length")
    public String length;
    public NewsFeedCardAnalyticsQueryParams withLength(String length) {
        this.length = length;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unit")
    public String unit;
    public NewsFeedCardAnalyticsQueryParams withUnit(String unit) {
        this.unit = unit;
        return this;
    }
}