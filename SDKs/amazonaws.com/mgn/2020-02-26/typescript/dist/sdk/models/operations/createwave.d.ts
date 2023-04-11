import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateWaveRequestBody extends SpeakeasyBase {
    /**
     * Wave description.
     */
    description?: string;
    /**
     * Wave name.
     */
    name: string;
    /**
     * Wave tags.
     */
    tags?: Record<string, string>;
}
export declare class CreateWaveRequest extends SpeakeasyBase {
    requestBody: CreateWaveRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateWaveResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * Success
     */
    wave?: shared.Wave;
}
