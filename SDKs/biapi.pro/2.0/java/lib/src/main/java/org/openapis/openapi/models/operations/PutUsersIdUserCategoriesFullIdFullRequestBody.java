/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class PutUsersIdUserCategoriesFullIdFullRequestBody {
    /**
     * Accountant account number.
     */
    @SpeakeasyMetadata("multipartForm:name=accountant_account")
    public String accountantAccount;

    public PutUsersIdUserCategoriesFullIdFullRequestBody withAccountantAccount(String accountantAccount) {
        this.accountantAccount = accountantAccount;
        return this;
    }
    
    /**
     * Hide (but not delete) a category. Must be 0, 1 or toggle.
     */
    @SpeakeasyMetadata("multipartForm:name=hide")
    public String hide;

    public PutUsersIdUserCategoriesFullIdFullRequestBody withHide(String hide) {
        this.hide = hide;
        return this;
    }
    
    public PutUsersIdUserCategoriesFullIdFullRequestBody(){}
}
