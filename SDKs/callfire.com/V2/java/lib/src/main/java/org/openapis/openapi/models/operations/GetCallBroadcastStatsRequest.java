/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetCallBroadcastStatsRequest {
    /**
     * Start of the search time interval, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=begin")
    public Long begin;

    public GetCallBroadcastStatsRequest withBegin(Long begin) {
        this.begin = begin;
        return this;
    }
    
    /**
     * End of the search time interval, formatted in unix time milliseconds. Example: 1473781817000 for Sat, 05 Jan 1985 14:03:37 GMT
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public Long end;

    public GetCallBroadcastStatsRequest withEnd(Long end) {
        this.end = end;
        return this;
    }
    
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;

    public GetCallBroadcastStatsRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    
    /**
     * An id of a call broadcast
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;

    public GetCallBroadcastStatsRequest withId(Long id) {
        this.id = id;
        return this;
    }
    
    public GetCallBroadcastStatsRequest(@JsonProperty("id") Long id) {
        this.id = id;
  }
}
