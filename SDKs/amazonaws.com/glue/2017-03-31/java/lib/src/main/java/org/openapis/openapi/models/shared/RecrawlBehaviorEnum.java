/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum RecrawlBehaviorEnum {
    CRAWL_EVERYTHING("CRAWL_EVERYTHING"),
    CRAWL_NEW_FOLDERS_ONLY("CRAWL_NEW_FOLDERS_ONLY"),
    CRAWL_EVENT_MODE("CRAWL_EVENT_MODE");

    @JsonValue
    public final String value;

    private RecrawlBehaviorEnum(String value) {
        this.value = value;
    }
}
