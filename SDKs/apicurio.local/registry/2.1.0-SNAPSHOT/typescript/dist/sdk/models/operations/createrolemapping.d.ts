import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateRoleMappingRequest extends SpeakeasyBase {
    request: shared.RoleMapping;
}
export declare class CreateRoleMappingResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
