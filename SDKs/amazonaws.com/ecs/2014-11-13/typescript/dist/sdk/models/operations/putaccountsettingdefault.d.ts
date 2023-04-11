import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutAccountSettingDefaultXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113PutAccountSettingDefault = "AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault"
}
export declare class PutAccountSettingDefaultRequest extends SpeakeasyBase {
    putAccountSettingDefaultRequest: shared.PutAccountSettingDefaultRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutAccountSettingDefaultXAmzTargetEnum;
}
export declare class PutAccountSettingDefaultResponse extends SpeakeasyBase {
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
    putAccountSettingDefaultResponse?: shared.PutAccountSettingDefaultResponse;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
