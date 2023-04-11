import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArchiveWaveRequestBody extends SpeakeasyBase {
    /**
     * Wave ID.
     */
    waveID: string;
}
export declare class ArchiveWaveRequest extends SpeakeasyBase {
    requestBody: ArchiveWaveRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ArchiveWaveResponse extends SpeakeasyBase {
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
