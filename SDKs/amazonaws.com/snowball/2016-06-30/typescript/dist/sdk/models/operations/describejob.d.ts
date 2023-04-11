import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeJobXAmzTargetEnum {
    AWSIESnowballJobManagementServiceDescribeJob = "AWSIESnowballJobManagementService.DescribeJob"
}
export declare class DescribeJobRequest extends SpeakeasyBase {
    describeJobRequest: shared.DescribeJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeJobXAmzTargetEnum;
}
export declare class DescribeJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeJobResult?: shared.DescribeJobResult;
    /**
     * InvalidResourceException
     */
    invalidResourceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
