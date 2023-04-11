import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateSessionResponseData extends SpeakeasyBase {
    sessionToken: string;
    sessionUri: string;
}
/**
 * Session created
 */
export declare class CreateSessionResponse extends SpeakeasyBase {
    data: CreateSessionResponseData;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
