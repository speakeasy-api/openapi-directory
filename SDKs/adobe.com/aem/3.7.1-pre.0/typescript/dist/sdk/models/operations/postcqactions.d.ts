import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostCqActionsRequest extends SpeakeasyBase {
    authorizableId: string;
    changelog: string;
}
export declare class PostCqActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
