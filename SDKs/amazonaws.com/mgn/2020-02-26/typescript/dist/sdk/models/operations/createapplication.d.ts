import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateApplicationRequestBody extends SpeakeasyBase {
    /**
     * Application description.
     */
    description?: string;
    /**
     * Application name.
     */
    name: string;
    /**
     * Application tags.
     */
    tags?: Record<string, string>;
}
export declare class CreateApplicationRequest extends SpeakeasyBase {
    requestBody: CreateApplicationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateApplicationResponse extends SpeakeasyBase {
    /**
     * Success
     */
    application?: shared.Application;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
}
