import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EstimationApiUpdateJsonRequest extends SpeakeasyBase {
    estimationUpdateApiModel: shared.EstimationUpdateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class EstimationApiUpdateJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    estimationFullDetailsApiModel?: shared.EstimationFullDetailsApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
