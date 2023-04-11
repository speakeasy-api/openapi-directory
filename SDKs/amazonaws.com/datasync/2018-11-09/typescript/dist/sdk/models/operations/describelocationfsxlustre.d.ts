import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLocationFsxLustreXAmzTargetEnum {
    FmrsServiceDescribeLocationFsxLustre = "FmrsService.DescribeLocationFsxLustre"
}
export declare class DescribeLocationFsxLustreRequest extends SpeakeasyBase {
    describeLocationFsxLustreRequest: shared.DescribeLocationFsxLustreRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLocationFsxLustreXAmzTargetEnum;
}
export declare class DescribeLocationFsxLustreResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeLocationFsxLustreResponse?: shared.DescribeLocationFsxLustreResponse;
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
