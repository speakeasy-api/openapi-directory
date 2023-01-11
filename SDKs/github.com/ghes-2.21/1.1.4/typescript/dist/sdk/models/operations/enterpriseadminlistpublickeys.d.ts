import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminListPublicKeysQueryParams extends SpeakeasyBase {
    direction?: shared.DirectionEnum;
    page?: number;
    perPage?: number;
    since?: string;
    sort?: shared.DirectionEnum1;
}
export declare class EnterpriseAdminListPublicKeysRequest extends SpeakeasyBase {
    queryParams: EnterpriseAdminListPublicKeysQueryParams;
}
export declare class EnterpriseAdminListPublicKeysResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    enterprisePublicKeys?: shared.EnterprisePublicKey[];
}
