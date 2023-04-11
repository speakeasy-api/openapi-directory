import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterStreamConsumerXAmzTargetEnum {
    Kinesis20131202RegisterStreamConsumer = "Kinesis_20131202.RegisterStreamConsumer"
}
export declare class RegisterStreamConsumerRequest extends SpeakeasyBase {
    registerStreamConsumerInput: shared.RegisterStreamConsumerInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterStreamConsumerXAmzTargetEnum;
}
export declare class RegisterStreamConsumerResponse extends SpeakeasyBase {
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
     * Success
     */
    registerStreamConsumerOutput?: shared.RegisterStreamConsumerOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
