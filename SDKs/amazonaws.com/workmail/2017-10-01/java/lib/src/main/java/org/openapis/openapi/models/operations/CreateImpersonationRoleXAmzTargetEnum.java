/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * CreateImpersonationRoleXAmzTargetEnum
 */
public enum CreateImpersonationRoleXAmzTargetEnum {
    WORK_MAIL_SERVICE_CREATE_IMPERSONATION_ROLE("WorkMailService.CreateImpersonationRole");

    @JsonValue
    public final String value;

    private CreateImpersonationRoleXAmzTargetEnum(String value) {
        this.value = value;
    }
}
