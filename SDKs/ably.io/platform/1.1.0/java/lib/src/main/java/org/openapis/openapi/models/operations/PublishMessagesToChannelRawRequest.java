/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class PublishMessagesToChannelRawRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-msgpack")
    public byte[] requestBody;

    public PublishMessagesToChannelRawRequest withRequestBody(byte[] requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    /**
     * The version of the API you wish to use.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Ably-Version")
    public String xAblyVersion;

    public PublishMessagesToChannelRawRequest withXAblyVersion(String xAblyVersion) {
        this.xAblyVersion = xAblyVersion;
        return this;
    }
    
    /**
     * The [Channel's ID](https://www.ably.io/documentation/rest/channels).
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public String channelId;

    public PublishMessagesToChannelRawRequest withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    
    /**
     * The response format you would like
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public org.openapis.openapi.models.shared.ResponseFormatEnum format;

    public PublishMessagesToChannelRawRequest withFormat(org.openapis.openapi.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
    
    public PublishMessagesToChannelRawRequest(@JsonProperty("channel_id") String channelId) {
        this.channelId = channelId;
  }
}
