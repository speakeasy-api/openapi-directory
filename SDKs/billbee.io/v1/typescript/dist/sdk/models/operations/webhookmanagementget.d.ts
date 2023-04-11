import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WebHookManagementGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersApiWebHookApiModels?: shared.RechnungsdruckWebAppControllersApiWebHookApiModel[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
