import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeStackDriftDetectionStatusActionEnum {
    DescribeStackDriftDetectionStatus = "DescribeStackDriftDetectionStatus"
}
export declare enum GETDescribeStackDriftDetectionStatusVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETDescribeStackDriftDetectionStatusRequest extends SpeakeasyBase {
    action: GETDescribeStackDriftDetectionStatusActionEnum;
    /**
     * <p>The ID of the drift detection results of this operation.</p> <p>CloudFormation generates new results, with a new drift detection ID, each time this operation is run. However, the number of drift results CloudFormation retains for any given stack, and for how long, may vary.</p>
     */
    stackDriftDetectionId: string;
    version: GETDescribeStackDriftDetectionStatusVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeStackDriftDetectionStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
