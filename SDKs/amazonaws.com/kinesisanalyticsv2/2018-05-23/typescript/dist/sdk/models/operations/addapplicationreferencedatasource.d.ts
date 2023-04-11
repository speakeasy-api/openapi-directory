import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddApplicationReferenceDataSourceXAmzTargetEnum {
    KinesisAnalytics20180523AddApplicationReferenceDataSource = "KinesisAnalytics_20180523.AddApplicationReferenceDataSource"
}
export declare class AddApplicationReferenceDataSourceRequest extends SpeakeasyBase {
    addApplicationReferenceDataSourceRequest: shared.AddApplicationReferenceDataSourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddApplicationReferenceDataSourceXAmzTargetEnum;
}
export declare class AddApplicationReferenceDataSourceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addApplicationReferenceDataSourceResponse?: shared.AddApplicationReferenceDataSourceResponse;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
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
