/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.time.OffsetDateTime;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class UserCurrentTrackedTimesRequest {
    /**
     * Only show times updated before the given time. This is a timestamp in RFC 3339 format
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before")
    public OffsetDateTime before;
    public UserCurrentTrackedTimesRequest withBefore(OffsetDateTime before) {
        this.before = before;
        return this;
    }
    
    /**
     * page size of results
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public UserCurrentTrackedTimesRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    
    /**
     * page number of results to return (1-based)
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public UserCurrentTrackedTimesRequest withPage(Long page) {
        this.page = page;
        return this;
    }
    
    /**
     * Only show times updated after the given time. This is a timestamp in RFC 3339 format
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public OffsetDateTime since;
    public UserCurrentTrackedTimesRequest withSince(OffsetDateTime since) {
        this.since = since;
        return this;
    }
    
}
