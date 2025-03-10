/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetScoreRevisionRequest {
    /**
     * Unique identifier of a score revision. You can use `last` to fetch the information related to the last version created.
     * 
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=revision")
    public String revision;

    public GetScoreRevisionRequest withRevision(String revision) {
        this.revision = revision;
        return this;
    }
    
    /**
     * Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
     * 
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;

    public GetScoreRevisionRequest withScore(String score) {
        this.score = score;
        return this;
    }
    
    /**
     * This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.
     * 
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sharingKey")
    public String sharingKey;

    public GetScoreRevisionRequest withSharingKey(String sharingKey) {
        this.sharingKey = sharingKey;
        return this;
    }
    
    public GetScoreRevisionRequest(@JsonProperty("revision") String revision, @JsonProperty("score") String score) {
        this.revision = revision;
        this.score = score;
  }
}
