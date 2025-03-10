/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class IssueEditIssueAttachmentRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.EditAttachmentOptions editAttachmentOptions;
    public IssueEditIssueAttachmentRequest withEditAttachmentOptions(org.openapis.openapi.models.shared.EditAttachmentOptions editAttachmentOptions) {
        this.editAttachmentOptions = editAttachmentOptions;
        return this;
    }
    
    /**
     * id of the attachment to edit
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=attachment_id")
    public Long attachmentId;
    public IssueEditIssueAttachmentRequest withAttachmentId(Long attachmentId) {
        this.attachmentId = attachmentId;
        return this;
    }
    
    /**
     * index of the issue
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=index")
    public Long index;
    public IssueEditIssueAttachmentRequest withIndex(Long index) {
        this.index = index;
        return this;
    }
    
    /**
     * owner of the repo
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public IssueEditIssueAttachmentRequest withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    
    /**
     * name of the repo
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public IssueEditIssueAttachmentRequest withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    
}
