import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLocationFsxOntapXAmzTargetEnum {
    FmrsServiceDescribeLocationFsxOntap = "FmrsService.DescribeLocationFsxOntap"
}
export declare class DescribeLocationFsxOntapRequest extends SpeakeasyBase {
    describeLocationFsxOntapRequest: shared.DescribeLocationFsxOntapRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLocationFsxOntapXAmzTargetEnum;
}
export declare class DescribeLocationFsxOntapResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeLocationFsxOntapResponse?: shared.DescribeLocationFsxOntapResponse;
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
