/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * CreateLicenseXAmzTargetEnum
 */
public enum CreateLicenseXAmzTargetEnum {
    AWS_LICENSE_MANAGER_CREATE_LICENSE("AWSLicenseManager.CreateLicense");

    @JsonValue
    public final String value;

    private CreateLicenseXAmzTargetEnum(String value) {
        this.value = value;
    }
}
