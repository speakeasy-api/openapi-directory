import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLocationNfsXAmzTargetEnum {
    FmrsServiceDescribeLocationNfs = "FmrsService.DescribeLocationNfs"
}
export declare class DescribeLocationNfsRequest extends SpeakeasyBase {
    describeLocationNfsRequest: shared.DescribeLocationNfsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLocationNfsXAmzTargetEnum;
}
export declare class DescribeLocationNfsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeLocationNfsResponse?: shared.DescribeLocationNfsResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
