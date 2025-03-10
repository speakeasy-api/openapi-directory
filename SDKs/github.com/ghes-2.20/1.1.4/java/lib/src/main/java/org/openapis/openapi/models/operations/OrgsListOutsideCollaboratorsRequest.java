/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class OrgsListOutsideCollaboratorsRequest {
    /**
     * Filter the list of outside collaborators. Can be one of:  
     * \* `2fa_disabled`: Outside collaborators without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled.  
     * \* `all`: All outside collaborators.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public OrgsListOutsideCollaboratorsFilterEnum filter;

    public OrgsListOutsideCollaboratorsRequest withFilter(OrgsListOutsideCollaboratorsFilterEnum filter) {
        this.filter = filter;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;

    public OrgsListOutsideCollaboratorsRequest withOrg(String org) {
        this.org = org;
        return this;
    }
    
    /**
     * Page number of the results to fetch.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;

    public OrgsListOutsideCollaboratorsRequest withPage(Long page) {
        this.page = page;
        return this;
    }
    
    /**
     * Results per page (max 100)
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;

    public OrgsListOutsideCollaboratorsRequest withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    
    public OrgsListOutsideCollaboratorsRequest(@JsonProperty("org") String org) {
        this.org = org;
  }
}
