import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a launch template version that was successfully deleted.
 */
export declare class DeleteLaunchTemplateVersionsResultSuccessfullyDeletedLaunchTemplateVersions extends SpeakeasyBase {
    launchTemplateId?: string;
    launchTemplateName?: string;
    versionNumber?: number;
}
/**
 * The error code.
 */
export declare enum DeleteLaunchTemplateVersionsResultUnsuccessfullyDeletedLaunchTemplateVersionsResponseErrorCodeEnum {
    LaunchTemplateIdDoesNotExist = "launchTemplateIdDoesNotExist",
    LaunchTemplateIdMalformed = "launchTemplateIdMalformed",
    LaunchTemplateNameDoesNotExist = "launchTemplateNameDoesNotExist",
    LaunchTemplateNameMalformed = "launchTemplateNameMalformed",
    LaunchTemplateVersionDoesNotExist = "launchTemplateVersionDoesNotExist",
    UnexpectedError = "unexpectedError"
}
/**
 * Information about the error.
 */
export declare class DeleteLaunchTemplateVersionsResultUnsuccessfullyDeletedLaunchTemplateVersionsResponseError extends SpeakeasyBase {
    code?: DeleteLaunchTemplateVersionsResultUnsuccessfullyDeletedLaunchTemplateVersionsResponseErrorCodeEnum;
    message?: string;
}
/**
 * Describes a launch template version that could not be deleted.
 */
export declare class DeleteLaunchTemplateVersionsResultUnsuccessfullyDeletedLaunchTemplateVersions extends SpeakeasyBase {
    launchTemplateId?: string;
    launchTemplateName?: string;
    responseError?: DeleteLaunchTemplateVersionsResultUnsuccessfullyDeletedLaunchTemplateVersionsResponseError;
    versionNumber?: number;
}
/**
 * Success
 */
export declare class DeleteLaunchTemplateVersionsResult extends SpeakeasyBase {
    successfullyDeletedLaunchTemplateVersions?: DeleteLaunchTemplateVersionsResultSuccessfullyDeletedLaunchTemplateVersions[];
    unsuccessfullyDeletedLaunchTemplateVersions?: DeleteLaunchTemplateVersionsResultUnsuccessfullyDeletedLaunchTemplateVersions[];
}
