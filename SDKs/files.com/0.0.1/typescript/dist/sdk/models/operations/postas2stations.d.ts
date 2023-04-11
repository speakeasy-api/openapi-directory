import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostAs2StationsRequestBody extends SpeakeasyBase {
    /**
     * AS2 Name
     */
    name: string;
    privateKey: string;
    privateKeyPassword?: string;
    publicCertificate: string;
}
export declare class PostAs2StationsResponse extends SpeakeasyBase {
    /**
     * The As2Stations object.
     */
    as2StationEntity?: shared.As2StationEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
