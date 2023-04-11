import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddApplicationReferenceDataSourceXAmzTargetEnum {
    KinesisAnalytics20150814AddApplicationReferenceDataSource = "KinesisAnalytics_20150814.AddApplicationReferenceDataSource"
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
    addApplicationReferenceDataSourceResponse?: Record<string, any>;
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
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
