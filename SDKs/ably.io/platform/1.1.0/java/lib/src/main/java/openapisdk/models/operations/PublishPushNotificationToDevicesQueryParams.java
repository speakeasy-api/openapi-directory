package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishPushNotificationToDevicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public PublishPushNotificationToDevicesQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
}