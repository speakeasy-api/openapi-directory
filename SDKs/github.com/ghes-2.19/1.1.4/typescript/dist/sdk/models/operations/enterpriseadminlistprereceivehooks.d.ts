import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminListPreReceiveHooksQueryParams extends SpeakeasyBase {
    direction?: shared.DirectionEnum;
    page?: number;
    perPage?: number;
    sort?: shared.DirectionEnum2;
}
export declare class EnterpriseAdminListPreReceiveHooksRequest extends SpeakeasyBase {
    queryParams: EnterpriseAdminListPreReceiveHooksQueryParams;
}
export declare class EnterpriseAdminListPreReceiveHooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    preReceiveHooks?: shared.PreReceiveHook[];
}
