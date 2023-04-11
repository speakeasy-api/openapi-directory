import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about a retention rule lock configuration.
 */
export declare class LockRuleRequestBodyLockConfiguration extends SpeakeasyBase {
    unlockDelay?: shared.UnlockDelay;
}
export declare class LockRuleRequestBody extends SpeakeasyBase {
    /**
     * Information about a retention rule lock configuration.
     */
    lockConfiguration: LockRuleRequestBodyLockConfiguration;
}
export declare class LockRuleRequest extends SpeakeasyBase {
    requestBody: LockRuleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique ID of the retention rule.
     */
    identifier: string;
}
export declare class LockRuleResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    lockRuleResponse?: shared.LockRuleResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
