import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of license to associate with the workspace.
 */
export declare enum AssociateLicenseLicenseTypeEnum {
    Enterprise = "ENTERPRISE",
    EnterpriseFreeTrial = "ENTERPRISE_FREE_TRIAL"
}
export declare class AssociateLicenseRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The type of license to associate with the workspace.
     */
    licenseType: AssociateLicenseLicenseTypeEnum;
    /**
     * The ID of the workspace to associate the license with.
     */
    workspaceId: string;
}
export declare class AssociateLicenseResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    associateLicenseResponse?: shared.AssociateLicenseResponse;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
