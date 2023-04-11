import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of license to remove from the workspace.
 */
export declare enum DisassociateLicenseLicenseTypeEnum {
    Enterprise = "ENTERPRISE",
    EnterpriseFreeTrial = "ENTERPRISE_FREE_TRIAL"
}
export declare class DisassociateLicenseRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The type of license to remove from the workspace.
     */
    licenseType: DisassociateLicenseLicenseTypeEnum;
    /**
     * The ID of the workspace to remove the Grafana Enterprise license from.
     */
    workspaceId: string;
}
export declare class DisassociateLicenseResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    disassociateLicenseResponse?: shared.DisassociateLicenseResponse;
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
