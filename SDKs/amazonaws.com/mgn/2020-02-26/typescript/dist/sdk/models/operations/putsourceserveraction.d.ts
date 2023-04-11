import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Source server post migration custom action category.
 */
export declare enum PutSourceServerActionRequestBodyCategoryEnum {
    DisasterRecovery = "DISASTER_RECOVERY",
    OperatingSystem = "OPERATING_SYSTEM",
    LicenseAndSubscription = "LICENSE_AND_SUBSCRIPTION",
    Validation = "VALIDATION",
    Observability = "OBSERVABILITY",
    Security = "SECURITY",
    Networking = "NETWORKING",
    Configuration = "CONFIGURATION",
    Backup = "BACKUP",
    Other = "OTHER"
}
export declare class PutSourceServerActionRequestBody extends SpeakeasyBase {
    /**
     * Source server post migration custom action ID.
     */
    actionID: string;
    /**
     * Source server post migration custom action name.
     */
    actionName: string;
    /**
     * Source server post migration custom action active status.
     */
    active?: boolean;
    /**
     * Source server post migration custom action category.
     */
    category?: PutSourceServerActionRequestBodyCategoryEnum;
    /**
     * Source server post migration custom action description.
     */
    description?: string;
    /**
     * Source server post migration custom action document identifier.
     */
    documentIdentifier: string;
    /**
     * Source server post migration custom action document version.
     */
    documentVersion?: string;
    /**
     * Source server post migration custom action external parameters.
     */
    externalParameters?: Record<string, shared.SsmExternalParameter>;
    /**
     * Source server post migration custom action must succeed for cutover.
     */
    mustSucceedForCutover?: boolean;
    /**
     * Source server post migration custom action order.
     */
    order: number;
    /**
     * Source server post migration custom action parameters.
     */
    parameters?: Record<string, shared.SsmParameterStoreParameter[]>;
    /**
     * Source server ID.
     */
    sourceServerID: string;
    /**
     * Source server post migration custom action timeout in seconds.
     */
    timeoutSeconds?: number;
}
export declare class PutSourceServerActionRequest extends SpeakeasyBase {
    requestBody: PutSourceServerActionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutSourceServerActionResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    sourceServerActionDocument?: shared.SourceServerActionDocument;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
