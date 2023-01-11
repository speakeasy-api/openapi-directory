import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserLovIndexResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    userLovIndex?: shared.UserLovIndex;
}
