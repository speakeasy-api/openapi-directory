import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateEnvironmentRequest extends SpeakeasyBase {
    updateEnvironmentModel: shared.UpdateEnvironmentModel;
    /**
     * The identifier of the Environment.
     */
    environmentId: string;
}
export declare class UpdateEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    environmentModel?: shared.EnvironmentModel;
    environmentModelHaljson?: shared.EnvironmentModelHaljson;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
