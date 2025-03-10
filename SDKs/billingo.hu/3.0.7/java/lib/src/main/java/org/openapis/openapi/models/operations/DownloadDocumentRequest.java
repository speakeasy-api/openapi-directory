/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class DownloadDocumentRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;

    public DownloadDocumentRequest withId(Long id) {
        this.id = id;
        return this;
    }
    
    public DownloadDocumentRequest(@JsonProperty("id") Long id) {
        this.id = id;
  }
}
