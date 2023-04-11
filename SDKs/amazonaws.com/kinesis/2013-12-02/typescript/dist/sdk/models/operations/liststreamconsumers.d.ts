import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListStreamConsumersXAmzTargetEnum {
    Kinesis20131202ListStreamConsumers = "Kinesis_20131202.ListStreamConsumers"
}
export declare class ListStreamConsumersRequest extends SpeakeasyBase {
    listStreamConsumersInput: shared.ListStreamConsumersInput;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListStreamConsumersXAmzTargetEnum;
}
export declare class ListStreamConsumersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ExpiredNextTokenException
     */
    expiredNextTokenException?: any;
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
    listStreamConsumersOutput?: shared.ListStreamConsumersOutput;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
