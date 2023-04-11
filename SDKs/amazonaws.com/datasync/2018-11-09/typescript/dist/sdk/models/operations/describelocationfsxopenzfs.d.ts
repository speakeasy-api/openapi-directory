import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLocationFsxOpenZfsXAmzTargetEnum {
    FmrsServiceDescribeLocationFsxOpenZfs = "FmrsService.DescribeLocationFsxOpenZfs"
}
export declare class DescribeLocationFsxOpenZfsRequest extends SpeakeasyBase {
    describeLocationFsxOpenZfsRequest: shared.DescribeLocationFsxOpenZfsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLocationFsxOpenZfsXAmzTargetEnum;
}
export declare class DescribeLocationFsxOpenZfsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeLocationFsxOpenZfsResponse?: shared.DescribeLocationFsxOpenZfsResponse;
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
