import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteEnvironmentRequest extends SpeakeasyBase {
    /**
     * The identifier of the Environment.
     */
    environmentId: string;
}
export declare class DeleteEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
