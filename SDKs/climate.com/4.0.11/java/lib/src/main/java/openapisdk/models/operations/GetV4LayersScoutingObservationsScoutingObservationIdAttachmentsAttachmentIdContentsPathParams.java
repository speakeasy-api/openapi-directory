package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=attachmentId")
    public String attachmentId;
    public GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams withAttachmentId(String attachmentId) {
        this.attachmentId = attachmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=scoutingObservationId")
    public String scoutingObservationId;
    public GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsPathParams withScoutingObservationId(String scoutingObservationId) {
        this.scoutingObservationId = scoutingObservationId;
        return this;
    }
}