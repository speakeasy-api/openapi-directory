/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;



/**
 * ForumGetRecruitmentThreadSummaries200Wildcard - Look at the Response property for more information about the nature of this response
 */
public class ForumGetRecruitmentThreadSummaries200Wildcard {
    
    public String detailedErrorTrace;

    public ForumGetRecruitmentThreadSummaries200Wildcard withDetailedErrorTrace(String detailedErrorTrace) {
        this.detailedErrorTrace = detailedErrorTrace;
        return this;
    }
    
    
    public Integer errorCode;

    public ForumGetRecruitmentThreadSummaries200Wildcard withErrorCode(Integer errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    
    
    public String errorStatus;

    public ForumGetRecruitmentThreadSummaries200Wildcard withErrorStatus(String errorStatus) {
        this.errorStatus = errorStatus;
        return this;
    }
    
    
    public String message;

    public ForumGetRecruitmentThreadSummaries200Wildcard withMessage(String message) {
        this.message = message;
        return this;
    }
    
    
    public java.util.Map<String, String> messageData;

    public ForumGetRecruitmentThreadSummaries200Wildcard withMessageData(java.util.Map<String, String> messageData) {
        this.messageData = messageData;
        return this;
    }
    
    
    public org.openapis.openapi.models.shared.ForumForumRecruitmentDetail[] response;

    public ForumGetRecruitmentThreadSummaries200Wildcard withResponse(org.openapis.openapi.models.shared.ForumForumRecruitmentDetail[] response) {
        this.response = response;
        return this;
    }
    
    
    public Integer throttleSeconds;

    public ForumGetRecruitmentThreadSummaries200Wildcard withThrottleSeconds(Integer throttleSeconds) {
        this.throttleSeconds = throttleSeconds;
        return this;
    }
    
    public ForumGetRecruitmentThreadSummaries200Wildcard(){}
}
