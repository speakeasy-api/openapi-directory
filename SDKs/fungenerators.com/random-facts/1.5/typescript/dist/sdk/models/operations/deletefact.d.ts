import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteFactSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class DeleteFactRequest extends SpeakeasyBase {
    /**
     * Fact ID
     */
    id: string;
}
export declare class DeleteFactResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
