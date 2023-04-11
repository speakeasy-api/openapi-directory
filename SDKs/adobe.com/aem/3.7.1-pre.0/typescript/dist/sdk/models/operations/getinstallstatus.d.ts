import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetInstallStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Retrieved CRX package manager install status
     */
    installStatus?: shared.InstallStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    getInstallStatusDefaultApplicationJSONString?: string;
}
