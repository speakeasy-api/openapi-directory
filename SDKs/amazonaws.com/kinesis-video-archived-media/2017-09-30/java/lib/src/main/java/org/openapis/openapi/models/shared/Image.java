/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * Image - A structure that contains the &lt;code&gt;Timestamp&lt;/code&gt;, &lt;code&gt;Error&lt;/code&gt;, and &lt;code&gt;ImageContent&lt;/code&gt;.
 */
public class Image {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Error")
    public ImageErrorEnum error;

    public Image withError(ImageErrorEnum error) {
        this.error = error;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageContent")
    public String imageContent;

    public Image withImageContent(String imageContent) {
        this.imageContent = imageContent;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("TimeStamp")
    public OffsetDateTime timeStamp;

    public Image withTimeStamp(OffsetDateTime timeStamp) {
        this.timeStamp = timeStamp;
        return this;
    }
    
    public Image(){}
}
