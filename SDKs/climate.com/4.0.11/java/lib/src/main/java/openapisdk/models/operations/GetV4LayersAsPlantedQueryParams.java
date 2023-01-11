package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetV4LayersAsPlantedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurredAfter")
    public OffsetDateTime occurredAfter;
    public GetV4LayersAsPlantedQueryParams withOccurredAfter(OffsetDateTime occurredAfter) {
        this.occurredAfter = occurredAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurredBefore")
    public OffsetDateTime occurredBefore;
    public GetV4LayersAsPlantedQueryParams withOccurredBefore(OffsetDateTime occurredBefore) {
        this.occurredBefore = occurredBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceOwnerId")
    public String resourceOwnerId;
    public GetV4LayersAsPlantedQueryParams withResourceOwnerId(String resourceOwnerId) {
        this.resourceOwnerId = resourceOwnerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updatedAfter")
    public OffsetDateTime updatedAfter;
    public GetV4LayersAsPlantedQueryParams withUpdatedAfter(OffsetDateTime updatedAfter) {
        this.updatedAfter = updatedAfter;
        return this;
    }
}