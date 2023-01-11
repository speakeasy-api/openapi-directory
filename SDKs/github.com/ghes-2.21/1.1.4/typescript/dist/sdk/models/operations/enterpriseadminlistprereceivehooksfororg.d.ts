import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminListPreReceiveHooksForOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare class EnterpriseAdminListPreReceiveHooksForOrgQueryParams extends SpeakeasyBase {
    direction?: shared.DirectionEnum;
    page?: number;
    perPage?: number;
    sort?: shared.DirectionEnum2;
}
export declare class EnterpriseAdminListPreReceiveHooksForOrgRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminListPreReceiveHooksForOrgPathParams;
    queryParams: EnterpriseAdminListPreReceiveHooksForOrgQueryParams;
}
export declare class EnterpriseAdminListPreReceiveHooksForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    orgPreReceiveHooks?: shared.OrgPreReceiveHook[];
}
