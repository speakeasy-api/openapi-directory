import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateWaveRequestBody extends SpeakeasyBase {
    /**
     * Wave description.
     */
    description?: string;
    /**
     * Wave name.
     */
    name?: string;
    /**
     * Wave ID.
     */
    waveID: string;
}
export declare class UpdateWaveRequest extends SpeakeasyBase {
    requestBody: UpdateWaveRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateWaveResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * Success
     */
    wave?: shared.Wave;
}
