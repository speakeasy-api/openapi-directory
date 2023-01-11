import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostMeRequest extends SpeakeasyBase {
    request?: Record<string, any>;
}
export declare class PostMeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
