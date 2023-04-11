import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAccountSettingXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DeleteAccountSetting = "AmazonEC2ContainerServiceV20141113.DeleteAccountSetting"
}
export declare class DeleteAccountSettingRequest extends SpeakeasyBase {
    deleteAccountSettingRequest: shared.DeleteAccountSettingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAccountSettingXAmzTargetEnum;
}
export declare class DeleteAccountSettingResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteAccountSettingResponse?: shared.DeleteAccountSettingResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
