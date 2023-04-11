import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsGetMemberLegacyRequest extends SpeakeasyBase {
    teamId: number;
    username: string;
}
export declare class TeamsGetMemberLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
