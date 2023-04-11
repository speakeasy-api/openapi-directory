import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateAccountSettingsXAmzTargetEnum {
    AwsProton20200720UpdateAccountSettings = "AwsProton20200720.UpdateAccountSettings"
}
export declare class UpdateAccountSettingsRequest extends SpeakeasyBase {
    updateAccountSettingsInput: shared.UpdateAccountSettingsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAccountSettingsXAmzTargetEnum;
}
export declare class UpdateAccountSettingsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateAccountSettingsOutput?: shared.UpdateAccountSettingsOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
