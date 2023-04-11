import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteApplicationReferenceDataSourceXAmzTargetEnum {
    KinesisAnalytics20150814DeleteApplicationReferenceDataSource = "KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource"
}
export declare class DeleteApplicationReferenceDataSourceRequest extends SpeakeasyBase {
    deleteApplicationReferenceDataSourceRequest: shared.DeleteApplicationReferenceDataSourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteApplicationReferenceDataSourceXAmzTargetEnum;
}
export declare class DeleteApplicationReferenceDataSourceResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteApplicationReferenceDataSourceResponse?: Record<string, any>;
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
