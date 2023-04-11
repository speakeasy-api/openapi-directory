import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LabOrdersCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LabOrdersCreateRequest extends SpeakeasyBase {
    doctor?: number;
    since?: string;
}
export declare class LabOrdersCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    labOrder?: shared.LabOrder;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
