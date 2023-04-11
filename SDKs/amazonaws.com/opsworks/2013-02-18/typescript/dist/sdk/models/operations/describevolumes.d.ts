import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeVolumesXAmzTargetEnum {
    OpsWorks20130218DescribeVolumes = "OpsWorks_20130218.DescribeVolumes"
}
export declare class DescribeVolumesRequest extends SpeakeasyBase {
    describeVolumesRequest: shared.DescribeVolumesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeVolumesXAmzTargetEnum;
}
export declare class DescribeVolumesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeVolumesResult?: shared.DescribeVolumesResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
