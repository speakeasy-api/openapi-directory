import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListStreamsXAmzTargetEnum {
    DynamoDBStreams20120810ListStreams = "DynamoDBStreams_20120810.ListStreams"
}
export declare class ListStreamsRequest extends SpeakeasyBase {
    listStreamsInput: shared.ListStreamsInput;
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
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    listStreamsOutput?: shared.ListStreamsOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
