import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminDemoteSiteAdministratorRequest extends SpeakeasyBase {
    username: string;
}
export declare class EnterpriseAdminDemoteSiteAdministratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
