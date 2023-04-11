import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateAccountSettingsXAmzTargetEnum {
    OpenSearchServerlessUpdateAccountSettings = "OpenSearchServerless.UpdateAccountSettings"
}
export declare class UpdateAccountSettingsRequest extends SpeakeasyBase {
    updateAccountSettingsRequest: shared.UpdateAccountSettingsRequest;
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
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateAccountSettingsResponse?: shared.UpdateAccountSettingsResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
