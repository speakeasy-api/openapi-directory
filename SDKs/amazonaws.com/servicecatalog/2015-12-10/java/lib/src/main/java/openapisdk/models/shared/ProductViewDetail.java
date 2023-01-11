package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ProductViewDetail
 * Information about a product view.
**/
public class ProductViewDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedTime")
    public OffsetDateTime createdTime;
    public ProductViewDetail withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductARN")
    public String productARN;
    public ProductViewDetail withProductArn(String productARN) {
        this.productARN = productARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductViewSummary")
    public ProductViewSummary productViewSummary;
    public ProductViewDetail withProductViewSummary(ProductViewSummary productViewSummary) {
        this.productViewSummary = productViewSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public StatusEnum status;
    public ProductViewDetail withStatus(StatusEnum status) {
        this.status = status;
        return this;
    }
}