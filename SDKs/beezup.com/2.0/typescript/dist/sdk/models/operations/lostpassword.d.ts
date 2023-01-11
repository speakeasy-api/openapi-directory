import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LostPasswordRequest extends SpeakeasyBase {
    request: string;
}
export declare class LostPasswordResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
