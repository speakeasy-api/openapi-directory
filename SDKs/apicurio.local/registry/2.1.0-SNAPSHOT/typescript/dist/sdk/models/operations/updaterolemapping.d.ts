import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateRoleMappingPathParams extends SpeakeasyBase {
    principalId: string;
}
export declare class UpdateRoleMappingRequest extends SpeakeasyBase {
    pathParams: UpdateRoleMappingPathParams;
    request: shared.UpdateRole;
}
export declare class UpdateRoleMappingResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
