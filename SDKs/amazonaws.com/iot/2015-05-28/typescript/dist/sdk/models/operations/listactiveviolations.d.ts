import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The criteria for a behavior.
 */
export declare enum ListActiveViolationsBehaviorCriteriaTypeEnum {
    Static = "STATIC",
    Statistical = "STATISTICAL",
    MachineLearning = "MACHINE_LEARNING"
}
/**
 * The verification state of the violation (detect alarm).
 */
export declare enum ListActiveViolationsVerificationStateEnum {
    FalsePositive = "FALSE_POSITIVE",
    BenignPositive = "BENIGN_POSITIVE",
    TruePositive = "TRUE_POSITIVE",
    Unknown = "UNKNOWN"
}
export declare class ListActiveViolationsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The criteria for a behavior.
     */
    behaviorCriteriaType?: ListActiveViolationsBehaviorCriteriaTypeEnum;
    /**
     *  A list of all suppressed alerts.
     */
    listSuppressedAlerts?: boolean;
    /**
     * The maximum number of results to return at one time.
     */
    maxResults?: number;
    /**
     * The token for the next set of results.
     */
    nextToken?: string;
    /**
     * The name of the Device Defender security profile for which violations are listed.
     */
    securityProfileName?: string;
    /**
     * The name of the thing whose active violations are listed.
     */
    thingName?: string;
    /**
     * The verification state of the violation (detect alarm).
     */
    verificationState?: ListActiveViolationsVerificationStateEnum;
}
export declare class ListActiveViolationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listActiveViolationsResponse?: shared.ListActiveViolationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
