/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GistsGetRevisionRequest {
    /**
     * gist_id parameter
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gist_id")
    public String gistId;

    public GistsGetRevisionRequest withGistId(String gistId) {
        this.gistId = gistId;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sha")
    public String sha;

    public GistsGetRevisionRequest withSha(String sha) {
        this.sha = sha;
        return this;
    }
    
    public GistsGetRevisionRequest(@JsonProperty("gist_id") String gistId, @JsonProperty("sha") String sha) {
        this.gistId = gistId;
        this.sha = sha;
  }
}
