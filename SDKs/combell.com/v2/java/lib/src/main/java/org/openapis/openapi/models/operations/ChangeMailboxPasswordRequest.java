/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ChangeMailboxPasswordRequest {
    /**
     * Contains the new password.
     */
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.UpdateMailboxPasswordRequest updateMailboxPasswordRequest;

    public ChangeMailboxPasswordRequest withUpdateMailboxPasswordRequest(org.openapis.openapi.models.shared.UpdateMailboxPasswordRequest updateMailboxPasswordRequest) {
        this.updateMailboxPasswordRequest = updateMailboxPasswordRequest;
        return this;
    }
    
    /**
     * Automatically added
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mailboxName")
    public String mailboxNamePathParameter;

    public ChangeMailboxPasswordRequest withMailboxNamePathParameter(String mailboxNamePathParameter) {
        this.mailboxNamePathParameter = mailboxNamePathParameter;
        return this;
    }
    
    /**
     * Mailbox name.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mailbox_name")
    public String mailboxNameQueryParameter;

    public ChangeMailboxPasswordRequest withMailboxNameQueryParameter(String mailboxNameQueryParameter) {
        this.mailboxNameQueryParameter = mailboxNameQueryParameter;
        return this;
    }
    
    public ChangeMailboxPasswordRequest(@JsonProperty("mailboxNamePathParameter") String mailboxNamePathParameter, @JsonProperty("mailbox_nameQueryParameter") String mailboxNameQueryParameter) {
        this.mailboxNamePathParameter = mailboxNamePathParameter;
        this.mailboxNameQueryParameter = mailboxNameQueryParameter;
  }
}
