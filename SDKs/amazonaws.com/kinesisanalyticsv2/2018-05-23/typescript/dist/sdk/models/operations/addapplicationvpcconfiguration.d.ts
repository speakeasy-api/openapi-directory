import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddApplicationVpcConfigurationXAmzTargetEnum {
    KinesisAnalytics20180523AddApplicationVpcConfiguration = "KinesisAnalytics_20180523.AddApplicationVpcConfiguration"
}
export declare class AddApplicationVpcConfigurationRequest extends SpeakeasyBase {
    addApplicationVpcConfigurationRequest: shared.AddApplicationVpcConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddApplicationVpcConfigurationXAmzTargetEnum;
}
export declare class AddApplicationVpcConfigurationResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addApplicationVpcConfigurationResponse?: shared.AddApplicationVpcConfigurationResponse;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InvalidApplicationConfigurationException
     */
    invalidApplicationConfigurationException?: any;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
