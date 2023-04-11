import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeArchiveXAmzTargetEnum {
    AWSEventsDescribeArchive = "AWSEvents.DescribeArchive"
}
export declare class DescribeArchiveRequest extends SpeakeasyBase {
    describeArchiveRequest: shared.DescribeArchiveRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeArchiveXAmzTargetEnum;
}
export declare class DescribeArchiveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeArchiveResponse?: shared.DescribeArchiveResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
