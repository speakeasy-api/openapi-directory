import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRoleMappingPathParams extends SpeakeasyBase {
    principalId: string;
}
export declare class DeleteRoleMappingRequest extends SpeakeasyBase {
    pathParams: DeleteRoleMappingPathParams;
}
export declare class DeleteRoleMappingResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
