import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListRoleMappingsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    roleMappings?: shared.RoleMapping[];
    statusCode: number;
}
