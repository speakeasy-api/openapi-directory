/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import java.time.OffsetDateTime;

public class ApplicationsDatapoint {
    /**
     * Count associated with timestamp
     */
    
    public Double count;

    public ApplicationsDatapoint withCount(Double count) {
        this.count = count;
        return this;
    }
    
    /**
     * Timestamp for the related count.
     */
    
    public OffsetDateTime time;

    public ApplicationsDatapoint withTime(OffsetDateTime time) {
        this.time = time;
        return this;
    }
    
    public ApplicationsDatapoint(){}
}
