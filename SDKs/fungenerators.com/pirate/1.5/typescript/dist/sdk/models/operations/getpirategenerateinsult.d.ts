import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPirateGenerateInsultSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class GetPirateGenerateInsultRequest extends SpeakeasyBase {
    /**
     * No of insults to generate
     */
    limit?: number;
}
export declare class GetPirateGenerateInsultResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
