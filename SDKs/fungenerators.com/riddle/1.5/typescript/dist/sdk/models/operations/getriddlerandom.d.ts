import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRiddleRandomSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class GetRiddleRandomRequest extends SpeakeasyBase {
    /**
     * Category to get the riddle from
     */
    category?: string;
}
export declare class GetRiddleRandomResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
