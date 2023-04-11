import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutAccountSettingXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113PutAccountSetting = "AmazonEC2ContainerServiceV20141113.PutAccountSetting"
}
export declare class PutAccountSettingRequest extends SpeakeasyBase {
    putAccountSettingRequest: shared.PutAccountSettingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutAccountSettingXAmzTargetEnum;
}
export declare class PutAccountSettingResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    putAccountSettingResponse?: shared.PutAccountSettingResponse;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
