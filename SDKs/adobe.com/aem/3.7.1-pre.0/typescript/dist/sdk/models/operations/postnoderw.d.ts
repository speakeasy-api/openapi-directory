import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostNodeRwRequest extends SpeakeasyBase {
    addMembers?: string;
    name: string;
    path: string;
}
export declare class PostNodeRwResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
