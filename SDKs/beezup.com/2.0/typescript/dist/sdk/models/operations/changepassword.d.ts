import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangePasswordRequest extends SpeakeasyBase {
    request: shared.ChangePasswordRequest;
}
export declare class ChangePasswordResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
