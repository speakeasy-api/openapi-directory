import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRoleMappingPathParams extends SpeakeasyBase {
    principalId: string;
}
export declare class GetRoleMappingRequest extends SpeakeasyBase {
    pathParams: GetRoleMappingPathParams;
}
export declare class GetRoleMappingResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    roleMapping?: shared.RoleMapping;
    statusCode: number;
}
