import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WebHookManagementLookupRequest extends SpeakeasyBase {
    id: string;
}
export declare class WebHookManagementLookupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersApiWebHookApiModel?: shared.RechnungsdruckWebAppControllersApiWebHookApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
