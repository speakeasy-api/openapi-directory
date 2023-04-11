import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetShakespeareGenerateInsultSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class GetShakespeareGenerateInsultRequest extends SpeakeasyBase {
    /**
     * No of insults to generate
     */
    limit?: number;
}
export declare class GetShakespeareGenerateInsultResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
