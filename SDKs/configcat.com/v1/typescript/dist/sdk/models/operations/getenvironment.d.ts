import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEnvironmentRequest extends SpeakeasyBase {
    /**
     * The identifier of the Environment.
     */
    environmentId: string;
}
export declare class GetEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * When everything is ok, the environment data returned.
     */
    environmentModel?: shared.EnvironmentModel;
    /**
     * When everything is ok, the environment data returned.
     */
    environmentModelHaljson?: shared.EnvironmentModelHaljson;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
