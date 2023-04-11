import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListStreamsXAmzTargetEnum {
    Kinesis20131202ListStreams = "Kinesis_20131202.ListStreams"
}
export declare class ListStreamsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    limit?: string;
    listStreamsInput: shared.ListStreamsInput;
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
    xAmzTarget: ListStreamsXAmzTargetEnum;
}
export declare class ListStreamsResponse extends SpeakeasyBase {
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
    listStreamsOutput?: shared.ListStreamsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
