import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterStreamConsumerXAmzTargetEnum {
    Kinesis20131202DeregisterStreamConsumer = "Kinesis_20131202.DeregisterStreamConsumer"
}
export declare class DeregisterStreamConsumerRequest extends SpeakeasyBase {
    deregisterStreamConsumerInput: shared.DeregisterStreamConsumerInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterStreamConsumerXAmzTargetEnum;
}
export declare class DeregisterStreamConsumerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
