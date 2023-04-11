import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProvisioningjobsJobIdRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    jobIdPathParameter: string;
    jobIdQueryParameter: string;
}
export declare class GetProvisioningjobsJobIdResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Success
     */
    provisioningJobCompletion?: shared.ProvisioningJobCompletion;
    /**
     * Success
     */
    provisioningJobInfo?: shared.ProvisioningJobInfo;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
