import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAccountSettingsXAmzTargetEnum {
    OpenSearchServerlessGetAccountSettings = "OpenSearchServerless.GetAccountSettings"
}
export declare class GetAccountSettingsRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAccountSettingsXAmzTargetEnum;
}
export declare class GetAccountSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAccountSettingsResponse?: shared.GetAccountSettingsResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
