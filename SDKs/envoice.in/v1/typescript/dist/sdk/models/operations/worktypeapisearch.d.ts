import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum WorkTypeApiSearchQueryOptionsOrderEnum {
    None = "None",
    Asc = "Asc",
    Desc = "Desc"
}
export declare class WorkTypeApiSearchRequest extends SpeakeasyBase {
    queryOptionsOrder?: WorkTypeApiSearchQueryOptionsOrderEnum;
    queryOptionsOrderBy?: string;
    queryOptionsPage?: number;
    queryOptionsPageSize?: number;
    queryOptionsQuery?: string;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class WorkTypeApiSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    workTypeDetailsApiModels?: shared.WorkTypeDetailsApiModel[];
}
