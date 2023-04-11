import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminPromoteUserToBeSiteAdministratorRequest extends SpeakeasyBase {
    username: string;
}
export declare class EnterpriseAdminPromoteUserToBeSiteAdministratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
