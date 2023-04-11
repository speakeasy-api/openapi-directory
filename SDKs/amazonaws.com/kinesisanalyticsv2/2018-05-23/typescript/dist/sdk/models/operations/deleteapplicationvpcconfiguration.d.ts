import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteApplicationVpcConfigurationXAmzTargetEnum {
    KinesisAnalytics20180523DeleteApplicationVpcConfiguration = "KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration"
}
export declare class DeleteApplicationVpcConfigurationRequest extends SpeakeasyBase {
    deleteApplicationVpcConfigurationRequest: shared.DeleteApplicationVpcConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteApplicationVpcConfigurationXAmzTargetEnum;
}
export declare class DeleteApplicationVpcConfigurationResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteApplicationVpcConfigurationResponse?: shared.DeleteApplicationVpcConfigurationResponse;
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
