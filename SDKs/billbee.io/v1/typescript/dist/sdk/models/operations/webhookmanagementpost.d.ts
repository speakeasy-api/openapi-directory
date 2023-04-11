import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WebHookManagementPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersApiWebHookApiModel?: shared.RechnungsdruckWebAppControllersApiWebHookApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
