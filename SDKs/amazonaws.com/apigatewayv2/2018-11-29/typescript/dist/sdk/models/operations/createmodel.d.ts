import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateModelRequestBody extends SpeakeasyBase {
    /**
     * A string with a length between [1-256].
     */
    contentType?: string;
    /**
     * A string with a length between [0-1024].
     */
    description?: string;
    /**
     * A string with a length between [1-128].
     */
    name: string;
    /**
     * A string with a length between [0-32768].
     */
    schema: string;
}
export declare class CreateModelRequest extends SpeakeasyBase {
    requestBody: CreateModelRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The API identifier.
     */
    apiId: string;
}
export declare class CreateModelResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createModelResponse?: shared.CreateModelResponse;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
