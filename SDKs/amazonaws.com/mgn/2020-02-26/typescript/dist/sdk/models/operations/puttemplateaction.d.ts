import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Template post migration custom action category.
 */
export declare enum PutTemplateActionRequestBodyCategoryEnum {
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
export declare class PutTemplateActionRequestBody extends SpeakeasyBase {
    /**
     * Template post migration custom action ID.
     */
    actionID: string;
    /**
     * Template post migration custom action name.
     */
    actionName: string;
    /**
     * Template post migration custom action active status.
     */
    active?: boolean;
    /**
     * Template post migration custom action category.
     */
    category?: PutTemplateActionRequestBodyCategoryEnum;
    /**
     * Template post migration custom action description.
     */
    description?: string;
    /**
     * Template post migration custom action document identifier.
     */
    documentIdentifier: string;
    /**
     * Template post migration custom action document version.
     */
    documentVersion?: string;
    /**
     * Template post migration custom action external parameters.
     */
    externalParameters?: Record<string, shared.SsmExternalParameter>;
    /**
     * Launch configuration template ID.
     */
    launchConfigurationTemplateID: string;
    /**
     * Template post migration custom action must succeed for cutover.
     */
    mustSucceedForCutover?: boolean;
    /**
     * Operating system eligible for this template post migration custom action.
     */
    operatingSystem?: string;
    /**
     * Template post migration custom action order.
     */
    order: number;
    /**
     * Template post migration custom action parameters.
     */
    parameters?: Record<string, shared.SsmParameterStoreParameter[]>;
    /**
     * Template post migration custom action timeout in seconds.
     */
    timeoutSeconds?: number;
}
export declare class PutTemplateActionRequest extends SpeakeasyBase {
    requestBody: PutTemplateActionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutTemplateActionResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    templateActionDocument?: shared.TemplateActionDocument;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
