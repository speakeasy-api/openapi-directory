import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateApplicationRequestBody extends SpeakeasyBase {
    /**
     * Application ID.
     */
    applicationID: string;
    /**
     * Application description.
     */
    description?: string;
    /**
     * Application name.
     */
    name?: string;
}
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    requestBody: UpdateApplicationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateApplicationResponse extends SpeakeasyBase {
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
}
