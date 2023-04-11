import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WebHookManagementPutRequest extends SpeakeasyBase {
    /**
     * The new webhook to use.
     */
    rechnungsdruckWebAppControllersApiWebHookApiModel: shared.RechnungsdruckWebAppControllersApiWebHookApiModel;
    /**
     * The WebHook ID.
     */
    id: string;
}
export declare class WebHookManagementPutResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersApiWebHookApiModel?: shared.RechnungsdruckWebAppControllersApiWebHookApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
