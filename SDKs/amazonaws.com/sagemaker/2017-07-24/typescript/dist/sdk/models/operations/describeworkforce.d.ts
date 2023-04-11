import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeWorkforceXAmzTargetEnum {
    SageMakerDescribeWorkforce = "SageMaker.DescribeWorkforce"
}
export declare class DescribeWorkforceRequest extends SpeakeasyBase {
    describeWorkforceRequest: shared.DescribeWorkforceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWorkforceXAmzTargetEnum;
}
export declare class DescribeWorkforceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeWorkforceResponse?: shared.DescribeWorkforceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
