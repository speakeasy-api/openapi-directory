import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminListPreReceiveEnvironmentsQueryParams extends SpeakeasyBase {
    direction?: shared.DirectionEnum;
    page?: number;
    perPage?: number;
    sort?: shared.DirectionEnum2;
}
export declare class EnterpriseAdminListPreReceiveEnvironmentsRequest extends SpeakeasyBase {
    queryParams: EnterpriseAdminListPreReceiveEnvironmentsQueryParams;
}
export declare class EnterpriseAdminListPreReceiveEnvironmentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    preReceiveEnvironments?: shared.PreReceiveEnvironment[];
}
