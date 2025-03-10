/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class EnterpriseAdminListPreReceiveEnvironmentsRequest {
    /**
     * One of `asc` (ascending) or `desc` (descending).
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public org.openapis.openapi.models.shared.DirectionEnum direction;

    public EnterpriseAdminListPreReceiveEnvironmentsRequest withDirection(org.openapis.openapi.models.shared.DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    
    /**
     * Page number of the results to fetch.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;

    public EnterpriseAdminListPreReceiveEnvironmentsRequest withPage(Long page) {
        this.page = page;
        return this;
    }
    
    /**
     * Results per page (max 100)
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;

    public EnterpriseAdminListPreReceiveEnvironmentsRequest withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public EnterpriseAdminListPreReceiveEnvironmentsSortEnum sort;

    public EnterpriseAdminListPreReceiveEnvironmentsRequest withSort(EnterpriseAdminListPreReceiveEnvironmentsSortEnum sort) {
        this.sort = sort;
        return this;
    }
    
    public EnterpriseAdminListPreReceiveEnvironmentsRequest(){}
}
