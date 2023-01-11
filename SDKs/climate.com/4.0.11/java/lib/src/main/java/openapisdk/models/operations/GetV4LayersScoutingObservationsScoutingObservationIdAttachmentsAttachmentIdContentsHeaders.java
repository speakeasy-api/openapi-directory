package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Range")
    public String range;
    public GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsHeaders withRange(String range) {
        this.range = range;
        return this;
    }
}