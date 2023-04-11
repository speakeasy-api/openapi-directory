import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDatabaseXAmzTargetEnum {
    Timestream20181101DescribeDatabase = "Timestream_20181101.DescribeDatabase"
}
export declare class DescribeDatabaseRequest extends SpeakeasyBase {
    describeDatabaseRequest: shared.DescribeDatabaseRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDatabaseXAmzTargetEnum;
}
export declare class DescribeDatabaseResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeDatabaseResponse?: shared.DescribeDatabaseResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidEndpointException
     */
    invalidEndpointException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
