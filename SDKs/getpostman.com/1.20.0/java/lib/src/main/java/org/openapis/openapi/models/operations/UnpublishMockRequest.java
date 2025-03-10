/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class UnpublishMockRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mock_uid")
    public String mockUid;

    public UnpublishMockRequest withMockUid(String mockUid) {
        this.mockUid = mockUid;
        return this;
    }
    
    public UnpublishMockRequest(@JsonProperty("mock_uid") String mockUid) {
        this.mockUid = mockUid;
  }
}
