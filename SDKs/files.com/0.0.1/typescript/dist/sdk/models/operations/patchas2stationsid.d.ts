import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchAs2StationsIdRequestBody extends SpeakeasyBase {
    /**
     * AS2 Name
     */
    name?: string;
    privateKey?: string;
    privateKeyPassword?: string;
    publicCertificate?: string;
}
export declare class PatchAs2StationsIdRequest extends SpeakeasyBase {
    requestBody?: PatchAs2StationsIdRequestBody;
    /**
     * As2 Station ID.
     */
    id: number;
}
export declare class PatchAs2StationsIdResponse extends SpeakeasyBase {
    /**
     * The As2Stations object.
     */
    as2StationEntity?: shared.As2StationEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
