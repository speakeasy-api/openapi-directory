import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrgsEnableOrDisableSecurityProductOnAllOrgReposRequest extends SpeakeasyBase {
    /**
     * The action to take.
     *
     * @remarks
     *
     * `enable_all` means to enable the specified security feature for all repositories in the organization.
     * `disable_all` means to disable the specified security feature for all repositories in the organization.
     */
    enablement: shared.OrgSecurityProductEnablementEnum;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The security feature to enable or disable.
     */
    securityProduct: shared.SecurityProductEnum;
}
export declare class OrgsEnableOrDisableSecurityProductOnAllOrgReposResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
