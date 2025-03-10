/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetAuthenticatedUserRequest {
    /**
     * Only return the user id
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=onlyId")
    public Boolean onlyId;

    public GetAuthenticatedUserRequest withOnlyId(Boolean onlyId) {
        this.onlyId = onlyId;
        return this;
    }
    
    public GetAuthenticatedUserRequest(){}
}
