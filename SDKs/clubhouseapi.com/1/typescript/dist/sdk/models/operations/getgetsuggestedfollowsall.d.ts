import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetGetSuggestedFollowsAllRequest extends SpeakeasyBase {
    inOnboarding?: boolean;
    page?: number;
    pageSize?: number;
}
export declare class GetGetSuggestedFollowsAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
