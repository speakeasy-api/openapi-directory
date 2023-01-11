import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SavePersonalInfoRequest extends SpeakeasyBase {
    request: shared.PersonalInfo;
}
export declare class SavePersonalInfoResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
