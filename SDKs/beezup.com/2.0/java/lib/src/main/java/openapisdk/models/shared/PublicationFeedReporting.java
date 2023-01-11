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
 * PublicationFeedReporting
 * Publication feed reporting
**/
public class PublicationFeedReporting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completed")
    public Boolean completed;
    public PublicationFeedReporting withCompleted(Boolean completed) {
        this.completed = completed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endUtcDate")
    public OffsetDateTime endUtcDate;
    public PublicationFeedReporting withEndUtcDate(OffsetDateTime endUtcDate) {
        this.endUtcDate = endUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public PublicationFeedReporting withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportedProducts")
    public Integer exportedProducts;
    public PublicationFeedReporting withExportedProducts(Integer exportedProducts) {
        this.exportedProducts = exportedProducts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedItems")
    public Integer failedItems;
    public PublicationFeedReporting withFailedItems(Integer failedItems) {
        this.failedItems = failedItems;
        return this;
    }
    @JsonProperty("feedType")
    public FeedTypeEnum feedType;
    public PublicationFeedReporting withFeedType(FeedTypeEnum feedType) {
        this.feedType = feedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("htmlReportGenerationErrorMessage")
    public String htmlReportGenerationErrorMessage;
    public PublicationFeedReporting withHtmlReportGenerationErrorMessage(String htmlReportGenerationErrorMessage) {
        this.htmlReportGenerationErrorMessage = htmlReportGenerationErrorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("htmlReportUrl")
    public String htmlReportUrl;
    public PublicationFeedReporting withHtmlReportUrl(String htmlReportUrl) {
        this.htmlReportUrl = htmlReportUrl;
        return this;
    }
    @JsonProperty("processingStatus")
    public String processingStatus;
    public PublicationFeedReporting withProcessingStatus(String processingStatus) {
        this.processingStatus = processingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishedItems")
    public Integer publishedItems;
    public PublicationFeedReporting withPublishedItems(Integer publishedItems) {
        this.publishedItems = publishedItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishedItemsWithWarning")
    public Integer publishedItemsWithWarning;
    public PublicationFeedReporting withPublishedItemsWithWarning(Integer publishedItemsWithWarning) {
        this.publishedItemsWithWarning = publishedItemsWithWarning;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startUtcDate")
    public OffsetDateTime startUtcDate;
    public PublicationFeedReporting withStartUtcDate(OffsetDateTime startUtcDate) {
        this.startUtcDate = startUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transmittedItems")
    public Integer transmittedItems;
    public PublicationFeedReporting withTransmittedItems(Integer transmittedItems) {
        this.transmittedItems = transmittedItems;
        return this;
    }
}