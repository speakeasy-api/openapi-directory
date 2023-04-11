import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaRequest extends SpeakeasyBase {
    idAccount: number;
    idConnection: number;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
    /**
     * maximum date
     */
    maxDate?: Date;
    /**
     * minimal date
     */
    minDate?: Date;
    /**
     * period to group logs
     */
    period?: string;
}
export declare class GetUsersIdUserConnectionsIdConnectionAccountsIdAccountDeltaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
