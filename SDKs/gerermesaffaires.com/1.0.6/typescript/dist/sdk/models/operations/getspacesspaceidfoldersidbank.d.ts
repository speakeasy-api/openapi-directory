import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdBankRequest extends SpeakeasyBase {
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdBankResponse extends SpeakeasyBase {
    /**
     * A bank folder
     */
    bank?: shared.Bank;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
