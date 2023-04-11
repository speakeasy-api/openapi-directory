import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEntitiesDetectionV2JobXAmzTargetEnum {
    ComprehendMedical20181030DescribeEntitiesDetectionV2Job = "ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job"
}
export declare class DescribeEntitiesDetectionV2JobRequest extends SpeakeasyBase {
    describeEntitiesDetectionV2JobRequest: shared.DescribeEntitiesDetectionV2JobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEntitiesDetectionV2JobXAmzTargetEnum;
}
export declare class DescribeEntitiesDetectionV2JobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEntitiesDetectionV2JobResponse?: shared.DescribeEntitiesDetectionV2JobResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
