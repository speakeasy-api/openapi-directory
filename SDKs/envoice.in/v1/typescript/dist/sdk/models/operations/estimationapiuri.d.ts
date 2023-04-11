import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EstimationApiUriRequest extends SpeakeasyBase {
    id: number;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class EstimationApiUriResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    estimationUriApiModel?: shared.EstimationUriApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
