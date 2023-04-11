import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDeliveryStreamXAmzTargetEnum {
    Firehose20150804DescribeDeliveryStream = "Firehose_20150804.DescribeDeliveryStream"
}
export declare class DescribeDeliveryStreamRequest extends SpeakeasyBase {
    describeDeliveryStreamInput: shared.DescribeDeliveryStreamInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDeliveryStreamXAmzTargetEnum;
}
export declare class DescribeDeliveryStreamResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDeliveryStreamOutput?: shared.DescribeDeliveryStreamOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
