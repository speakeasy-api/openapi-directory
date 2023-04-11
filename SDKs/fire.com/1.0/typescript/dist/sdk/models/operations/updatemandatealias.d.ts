import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateMandateAliasRequest extends SpeakeasyBase {
    mandateUuid: string;
}
export declare class UpdateMandateAliasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
